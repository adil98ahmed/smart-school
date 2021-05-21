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


function whenLoad(){
    if(sessionStorage.getItem("id")!=null){
            console.log(sessionStorage.getItem("id"))
            initialFirebase();
            var dbRef = firebase.database().ref().child("teacher");
            dbRef.on('value',function gotData(data){
            var teachers = data.val();
            var keys = Object.keys(teachers);
            for (var i = 0 ; i < keys.length ; i++){
                var k = keys[i];
                var id = teachers[k].id;
                if (id == sessionStorage.getItem("id")){
                    document.getElementById("nameSpace").innerHTML=teachers[k].name
                    document.getElementById("genderSpace").innerHTML=teachers[k].gender
                    document.getElementById("hireSpace").innerHTML=teachers[k].hireDate
                    document.getElementById("salarySpace").innerHTML=teachers[k].salary
                    document.getElementById("dataOfBirthSpace").innerHTML=teachers[k].dateOfBirth
                    document.getElementById("religionSpace").innerHTML=teachers[k].relision
                    document.getElementById("emailSpace").innerHTML=teachers[k].Email
                    document.getElementById("classSpace").innerHTML=teachers[k].classes
                    document.getElementById("subjectSpace").innerHTML=teachers[k].subject
                    document.getElementById("addressSpace").innerHTML=teachers[k].address
                    document.getElementById("phoneSpace").innerHTML=teachers[k].phone
                }
            }
            
        })
       }
}