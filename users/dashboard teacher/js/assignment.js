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




function addAssignment(){
    console.log("asa")
    initialFirebase()
    var link = document.getElementById("assiLink").value;
    var id = sessionStorage.getItem("id");
    var grade , subjectId , teacherId , classId ;
    var dbRefAssi = firebase.database().ref().child("assignments");
    var dbRefTeacher = firebase.database().ref().child("teacher");
    var dbRefClasses = firebase.database().ref().child("classes");
    var dbRefSubjects = firebase.database().ref().child("subjects");
    var date=new Date();
    var day = date.getDate().toString();
    var month= (date.getMonth()+1).toString();
    var year = date.getYear().toString()
    
    dbRefTeacher.on('value',function gotData(data){
        var teachers = data.val();
        var keys = Object.keys(teachers);
        for( var  i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            if(sessionStorage.getItem("id") == teachers[k].id){
                teacherId = teachers[k].id
                classId = teachers[k].classes
                subjectId = teachers[k].subject
            }
        }
    console.log(teacherId + " " + classId +" "+ subjectId)
    })
    
    setTimeout(function(){
        dbRefClasses.on('value',function gotData(data){
        var classes = data.val();
        var keys = Object.keys(classes);
        for( var  i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            if(classes[k].id == classId){
                grade = classes[k].grade;
            }
        }
    })
        
    },1000)
    
    
    
    
    
    
    setTimeout(function(){
        dbRefAssi.push().set({
        "id" : "1",
        "date" : day+"/"+month+"/"+year,
        "deadline":"12/8/2019",
        "filePath":link,
        "grade":grade,
        "subject":subjectId,
        "teacherId":teacherId,
        "studentsSolve":{"id":"ss"}
    })
    },2000)
    
    
}