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



function ss(){
    if(sessionStorage.getItem("username")!=null ){
            console.log(sessionStorage.getItem("username"))
            initialFirebase();
            var dbRef = firebase.database().ref().child("student");
            var students;
            var index;
            var index2=[];
            var flag2=false;
            var dbEvents = firebase.database().ref().child("events");
            dbRef.on('value',function gotData(data){
             students = data.val();
            var keys = Object.keys(students);
            for (var i = 0 ; i < keys.length ; i++){
                var k = keys[i];
                var username = students[k].username;
                if (username == sessionStorage.getItem("username")){
                    index = k;
                    document.getElementById("nameSpace").innerHTML=students[k].name
                    document.getElementById("genderSpace").innerHTML=students[k].gender
                    document.getElementById("dateOfBirthSpace").innerHTML=students[k].dateOfBirth
                    document.getElementById("religionSpace").innerHTML=students[k].religion
                    document.getElementById("parentSpace").innerHTML=students[k].parentId
                    document.getElementById("emailSpace").innerHTML=students[k].email
                    document.getElementById("addmissionSpace").innerHTML=students[k].admissionDate
                    document.getElementById("classSpace").innerHTML=students[k].class
                    document.getElementById("addressSpace").innerHTML=students[k].address
                    document.getElementById("phoneSpace").innerHTML=students[k].phone
                }
            }
            
        })
        
        
        setTimeout(function(){
            var stGrade=students[index].grade;
            dbEvents.on('value',function gotData(data){
                var events = data.val();
                var keys = Object.keys(events);
                for(var j = 0 ; j<keys.length ; j++){
                    var k = keys[j];
                    if(stGrade == events[k].grade){
                        flag2 =true;
                        index2 .push(k);
                    }
                }
                setTimeout(function(){
                    console.log(index2.length);
                    for(var k = 0 ; k < index2.length ;k++){
                        var kk = index2[k];
                        document.getElementById("dola").innerHTML += "event Name : "+events[kk].eventName+"<br/>"+"event Name : "+ events[kk].date+"<hr/>"
                    }
                    
                },1500)
            })
        },2000)
        
       }
}


