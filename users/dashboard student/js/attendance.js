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

var x = document.getElementById("demo");
var lat = 29;
var long = 30;
var h=8;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
    
}

function showPosition(position) {
    
    console.log(position.coords.latitude)
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getYear();    
    var houre = date.getHours();
    
   var latt = parseInt(position.coords.latitude);
    var longg = parseInt(position.coords.longitude);
    var flag = false;
    var index;
        console.log(latt)
        console.log(longg)
    
    if(latt == lat && longg==long ){
        initialFirebase();
        var dbRef = firebase.database().ref().child("student");
        var dbRef2=firebase.database().ref().child("student");
        dbRef.on('value', function gotData(data){
            var students = data.val();
            var keys = Object.keys(students);
            
            for( var i = 0 ; i < keys.length ;i++){
                var k = keys[i];
                
                if(students[k].id == sessionStorage.getItem("id")){
                    index = k;
                    flag=true;
                    
                }
            }
            
            
            
            
        })
        
        
        
        
        
    }
    setTimeout(function(){
                console.log(index)
                console.log(flag)
                dbRef2.child(index).child("attendance").push().set({"date":date + "/" + month +"/"+year })
            },2000)
    
}








