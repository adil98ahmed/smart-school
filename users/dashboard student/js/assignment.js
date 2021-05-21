'use strict';

var search = document.getElementById('search'), 
    searchWrapper = document.getElementById('search-wrapper'), 
    closeIcon = document.getElementById('close-icon');

// Input focus
search.onfocus = function() {
  searchWrapper.classList.add('search-expanded');
  this.addEventListener('transitionend', function() {
    closeIcon.style.display = 'block';
  });
}

// Input blur
search.onblur = function() {
  
  searchWrapper.classList.remove('search-expanded');
  closeIcon.classList.add('closing');
  
  this.addEventListener('transitionend', function() {
    closeIcon.classList.remove('closing');
    closeIcon.style.display = 'none';
  });
  
}

// Close
closeIcon.onclick = function() {
  
  this.classList.add('closing');
  
  document.activeElement.blur();
  
  setTimeout(function() {
    closeIcon.classList.remove('closing');
  }, 1000);
  
}



function initialFirebase()
{
    var firebaseConfig = {
    apiKey: "AIzaSyCbxVku__SrIQ6UsMp1BmmrtZK8y1dJx58",
    authDomain: "garduation2.firebaseapp.com",
    databaseURL: "https://garduation2.firebaseio.com",
    projectId: "garduation2",
    storageBucket: "garduation2.appspot.com",
    messagingSenderId: "405020867214",
    appId: "1:405020867214:web:1f6463a18877ce64"
  };
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}




function getSubject(subId){
    initialFirebase()
    var flag = false;
    var index ;
    var dbSubjects = firebase.database().ref().child("subjects");
    dbSubjects.on('value',function gotData(data){
        var subjs = data.val();
        var keys = Object.keys(subjs);
        for(var i =0;i<keys.length;i++){
            var k = keys[i]
            if(subjs[k].id == subId){
                flag = true;
                index =k;
            }
        }
        setTimeout(function(){
            if(flag){
        return subjs[index].name;
    }
        },500)
    })
    
}

var grade ;
function getGrade(){
    
    initialFirebase()
    var flag = false;
    var index ;
    var dbStudents = firebase.database().ref().child("student")
    dbStudents.on('value',function gotData(data){
        var student = data.val();
        var keys = Object.keys(student);
        for(var i =0;i<keys.length;i++){
            var k = keys[i]
            if(student[k].id == sessionStorage.getItem("id")){
                flag = true;
                index =k;
                
            }
        }
        setTimeout(function(){
        if(flag){
         grade = student[index].grade
            console.log(grade)
    }
    },500)
    
    })
}


function getAssignments(assiId){
        initialFirebase();
    var flag =false;
    var index ;
    var db = firebase.database().ref().child("assignments");
    db.on('value',function gotData(data){
        var assis = data.val();
        var keys = Object.keys(assis);
        for(var i = 0 ; i< keys.length ; i++){
            var k =keys[i];
            if(assis[k].id == assiId){
               
                flag =true;
                index = k;
                
            }
        }
        
    })
    setTimeout(function(){
            if(flag){
                db.child(index).child("studentsSolve").push().set({"id":sessionStorage.getItem("id")},function(){window.location.href="assignment.html"});
                
            }
            
        },1000)
    
}

function getAssignmentLink(assiId){
    initialFirebase();
    var flag =false;
    var index ;
    var assis;
    var db = firebase.database().ref().child("assignments");
    db.on('value',function gotData(data){
        assis = data.val();
        var keys = Object.keys(assis);
        for(var i = 0 ; i< keys.length ; i++){
            var k =keys[i];
            if(assis[k].id == assiId){
               
                flag =true;
                index = k;
                
            }
        }
        
    })
    setTimeout(function(){
            if(flag){
                window.open(assis[index].filePath);
            }
            
        },1000)
    
}






function whenLoad(){
    var grade2 = getGrade();
    
    setTimeout(function(){
        initialFirebase();
    var subjName;
    var assigId;
    var deadLine;
    var flag;
    var index;
    var index2=[];
    var dbAssigs = firebase.database().ref().child("assignments")
    dbAssigs.on('value',function gotData(data){
        
        var assigs = data.val();
        var keys = Object.keys(assigs);
        for(var i = 0 ; i < keys.length ;i++){
            var k = keys[i];
            console.log(k+"  "+grade)
            if(assigs[k].grade == grade){
                
                
                index=k;
                index2.push(k)
                
                
            }
            
        }
        
        setTimeout(function(){
            for(var k = 0 ;k<index2.length;k++){
                var k2 = index2[k]
                deadLine = assigs[k2].deadline;
                assigId = assigs[k2].id;
                
                    console.log("assi Id = "+assigs[k2].id)
                    console.log("Assig subj = " + assigs[k2].subject)
                    console.log("assi deadLine = "+assigs[k2].deadline)
                
                    var newTr = document.createElement('tr')

                        var tId = document.createElement('th')

                        var tdDeadLine = document.createElement('td');
                        
                        var tdSubject = document.createElement('td');
                        
                        var tdActions =document.createElement('td')
                        
                        var divActions =document.createElement('div')
                        
                        var viewButton =document.createElement('button')
                        
                        var uploadButton = document.createElement('button')
                        
                        newTr.appendChild(tId)
                        newTr.appendChild(tdDeadLine)
                        newTr.appendChild(tdSubject)
                        divActions.appendChild(viewButton)
                        divActions.appendChild(uploadButton)
                        tdActions.appendChild(divActions)
                        newTr.append(tdActions)
                        
                        tbody.appendChild(newTr)
                        tId.innerHTML = assigId;
                        tdDeadLine.innerHTML = deadLine;
                        tdSubject.innerHTML = assigs[k2].subject;
                        viewButton.innerHTML = "View"
                        uploadButton.innerHTML = "Upload"
                        
                        
                        
                        viewButton.className = "btn  btn-sm btn-outline-primary"
                        uploadButton .className = "btn  btn-sm btn-outline-success"
                        
                        
                        var rowNumber = document.getElementById("tbody").childElementCount;
                        var rows = document.getElementById("tbody").children;
                        
                        for(var m = 0 ;m< rowNumber ; m++){
                            rows[m].childNodes[3].childNodes[0].childNodes[0].onclick = function(e){
                                var id2=(e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML)
                                console.log(id2+" view")
                                getAssignmentLink(id2);
                            }
                            
                            rows[m].childNodes[3].childNodes[0].childNodes[1].onclick = function(e){
                                var id2=(e.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML)
                                console.log(id2+" upload")
                                getAssignments(id2);
                            }
                        }
                        
                        
                
                
            }
            
        },2000)
        
        
        
    })

    },2000)
    
    
}








/*

setTimeout(function(){
                            deadLine = assigs[index].deadline
                            var tbody=document.getElementById("tbody")

                        },500)
                        
                        */
