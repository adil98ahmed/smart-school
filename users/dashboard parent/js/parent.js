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


function getStudents(sts){
    var keys = Object.keys(sts);
    var stsId = [];
    for (var i = 0 ; i< keys.length ; i++){
        var k = keys[i];
        stsId.push(sts[k].id)
        console.log(sts[k].id)
    }
    return stsId;
}

function whenLoad(){
    
    if(sessionStorage.getItem("id")!=null){
            console.log(sessionStorage.getItem("id"))
            initialFirebase();
            var dbRef = firebase.database().ref().child("parent");
            var parents;
            var index;
            var dbEvents = firebase.database().ref().child("events");
            dbRef.on('value',function gotData(data){
             parents = data.val();
            var keys = Object.keys(parents);
            for (var i = 0 ; i < keys.length ; i++){
                var k = keys[i];
                var parentId = parents[k].id;
                if (parentId == sessionStorage.getItem("id")){
                    index = k;
                    
                    document.getElementById("nameSpace").innerHTML=parents[k].name
                    document.getElementById("idSpace").innerHTML=parents[k].id
                    document.getElementById("addressSpace").innerHTML=parents[k].address
                    document.getElementById("emailSpace").innerHTML=parents[k].email
                    document.getElementById("phoneSpace").innerHTML=parents[k].phone
                    document.getElementById("genderSpace").innerHTML=parents[k].gender
                    setTimeout(function(){
                         document.getElementById("studentsSpace").innerHTML=getStudents(parents[k].student).toString();
                    },500)
                    
                }
            }
            
        })
        
        
        
        
       }
}
