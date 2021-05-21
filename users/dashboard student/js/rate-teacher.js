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

var stClassId ;

function getCurrentStudentClassId(){
    var sessionId = sessionStorage.getItem("id");
    dbRef = firebase.database().ref().child("student");
    dbRef.on('value',function gotData(data){
        var sts = data.val();
        var keys = Object.keys(sts);
        var flag =false;
        var index;
        for(var i = 0 ; i< keys.length ;i++){
            var k = keys[i]
            if(sessionId == sts[k].id){
                flag = true;
                index =k;
                console.log("ss = "+sts[index].classId)
            }
        }
        setTimeout(function(){
            if(flag){
                
                stClassId= sts[index].classId;
                console.log("stClassID = ",stClassId)
            }
        },500)
    })
}





function loadTeachers()
{
    initialFirebase();
    var flag =false ;
    var index ;
    var teachers
    var dbTeacher = firebase.database().ref().child("teacher");
    getCurrentStudentClassId();
    setTimeout(function(){
       var div = (document.getElementById("row"));
    
    dbTeacher.on('value',function gotData(data){
        teachers = data.val();
        var keys = Object.keys(teachers);
        for(var i =0; i<keys.length;i++){
            var k = keys[i];
            console.log(teachers[k].classes , stClassId)
            if(teachers[k].classes == stClassId){
                flag =true;
                index = k;
                setTimeout(function(){
            if(flag){
                console.log("ldsn")
                div.innerHTML += "<div class='col-md-4 col-sm-6'> <div class='our-team'><img src='images/img-2.jpg'> <div class='team-content'> <h3 class='title'>"+teachers[index].id+"</h3> <span class='post'>Web Designer</span> <ul class='social'> <li><a ><i class='fas fa-star'></i></a></li><li><a  ><i class='fas fa-star'></i></a></li> <li><a ><i class='fas fa-star'></i></a></li> <li><a  ><i class='fas fa-star'></i></a></li> <li><a ><i class='fas fa-star'></i></a></li> </ul> </div></div></div>"
            }
        },00)
                
            }
            
        }
        
    })
     
        
    },1500)
    
    
    
    setTimeout(function(){
       var row= document.getElementById("row");
        rows = document.getElementById("row").children;
        var teacherId ;
        var rateValue;
        console.log("ss Id",row.childNodes[1].childNodes[1].childNodes[2]);
        
        var star = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[2].childNodes[0];
        
        
        row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[1].childNodes[0].onclick = function(){
            
            teacherId = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[1].childNodes[0].parentNode.parentNode.parentNode.childNodes[1].innerHTML;
            rateValue = "1";
            var rateAverage = parseInt(teachers[index].rateAverage)
            var currentRate = parseInt(teachers[index].rate)
            console.log(rateAverage)
            dbTeacher.child(index).child("rate").set(((1+currentRate)/rateAverage).toString(),function(){alert("rating done");window.location.href = "rate-teacher.html"})
            console.log(teacherId  , " ",rateValue)
        }
        star.onclick = function(e){
            teacherId = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[2].childNodes[0].parentNode.parentNode.parentNode.childNodes[1].innerHTML;
            rateValue = "2";
            var rateAverage = parseInt(teachers[index].rateAverage)
            var currentRate = parseInt(teachers[index].rate)
            console.log(rateAverage)
            dbTeacher.child(index).child("rate").set(((2+currentRate)/rateAverage).toString(),function(){alert("rating done");window.location.href = "rate-teacher.html"})
            console.log(teacherId  , " ",rateValue)
        }
        row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[4].childNodes[0].onclick = function(e){
            teacherId = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[4].childNodes[0].parentNode.parentNode.parentNode.childNodes[1].innerHTML;
            rateValue = "3";
            var rateAverage = parseInt(teachers[index].rateAverage)
            var currentRate = parseInt(teachers[index].rate)
            console.log(rateAverage)
            dbTeacher.child(index).child("rate").set(((3+currentRate)/rateAverage).toString(),function(){alert("rating done");window.location.href = "rate-teacher.html"})
            console.log(teacherId  , " ",rateValue)
        };
        row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[6].childNodes[0].onclick = function(e){
            teacherId = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[6].childNodes[0].parentNode.parentNode.parentNode.childNodes[1].innerHTML;
            rateValue = "4";
            console.log(teacherId  , " ",rateValue)
        }
       row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[8].childNodes[0].onclick = function(e){
            teacherId = row.childNodes[1].childNodes[1].childNodes[2].childNodes[5].childNodes[8].childNodes[0].parentNode.parentNode.parentNode.childNodes[1].innerHTML;
            rateValue = "5";
           console.log(teacherId  , " ",rateValue)
        }
       
        
    },4000)
    
    
}


/*

*/