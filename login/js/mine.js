function animate_Me(target, moveMe){
  $(target).focus(function(){
	  $(moveMe).animate({"marginLeft":"266px"});
	});
  $(target).focusout(function(){
    $(moveMe).animate({"marginLeft":"24px"});
  });

}
//--------------------

animate_Me("input[type='text']", ".fa-user");
animate_Me("input[placeholder='Your Last Name']", ".fa-user-plus");
animate_Me("input[type='email']", ".fa-envelope");
animate_Me("input[type='password']", ".fa-lock");
animate_Me("input[placeholder='Confirm Password']", ".fa-refresh");



 
  // Initialize Firebase
var username = "";

var password = "";






function getUserName()
{
    username = document.getElementById("usernameField").value;
    return username;
}

function getPassword()
{
    password = document.getElementById("passwordField").value;
    return password;
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


function teacherLogin(){
    initialFirebase();
    var index;
    dbRef = firebase.database().ref().child("teacher");
    dbRef.on('value', function gotData(data){
        var flag= false;
       var teachers = data.val();
        var keys = Object.keys(teachers);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var user = teachers[k].username
            var pass = teachers[k].password
            if(pass == getPassword() && user == getUserName()){
                flag = true;
                index=k;
            }
            
        }
        if (flag){
            sessionStorage.setItem("id",teachers[index].id);
            var value1=username;
            var value2=password;
            var value3=""
            var queryString = "?" + value1 + "&" + value2 + "&" + value3;
            window.location.href = "../users/dashboard teacher/teacher.html";
        }
        else{
            alert("false login teacher")
        }
        
        
    });     
}

/*


*/

function studentLogin(){
    
    initialFirebase();
    var index ;
    dbRef = firebase.database().ref().child("student");
    dbRef.on('value', function gotData(data){
        var flag= false;
       var students = data.val();
        var keys = Object.keys(students);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var user = students[k].username
            var pass = students[k].password
            if(pass == getPassword() && user == getUserName()){
                flag = true;
                index = k;
            }
            
        }
        if (flag){
            console.log("right login student");
            var value1=username;
            var value2=password;
            var value3=students[index].id
            sessionStorage.setItem("username",value1)
            var queryString = "?" + value1 + "&" + value2 + "&" + value3;
            sessionStorage.setItem("id",value3)
            window.open("../users/dashboard student/student.html"+queryString);
        }
        else{
            alert("false login student")
        }
        
        
    });
   
}


function parentLogin(){
    
    initialFirebase();
    var parentId;
    var parents;
    var index;
    dbRef = firebase.database().ref().child("parent");
    dbRef.on('value', function gotData(data){
        var flag= false;
        parents = data.val();
        var keys = Object.keys(parents);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var user = parents[k].username
            var pass = parents[k].password
            if(pass == getPassword() && user == getUserName()){
                flag = true;
                index = k;
            }
            
        }
        if (flag){
            console.log("right login parent")
            sessionStorage.setItem("id",parents[index].id)
            var value1=username;
            var value2=password;
            
            var value3=""
            var queryString = "?" + value1 + "&" + value2 + "&" + value3;
            window.open("../users/dashboard parent/parent.html"+queryString);
        }
        else{
            alert("false login parent")
        }
        
        
    });
   
}

function adminLogin(){
    
    initialFirebase();
    dbRef = firebase.database().ref().child("admin");
    dbRef.on('value', function gotData(data){
        var flag= false;
       var admins = data.val();
        var keys = Object.keys(admins);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var user = admins[k].username
            var pass = admins[k].password
            if(pass == getPassword() && user == getUserName()){
                flag = true;
            }
            
        }
        if (flag){
            sessionStorage.setItem("username",username);
            console.log("right login admin");
            var value1=username;
            var value2=password;
            var value3=""
            var queryString = "?" + value1 + "&" + value2 + "&" + value3;
            window.location.href ="../New folder/dashboards admin/d-admin.html"+queryString;
        }
        else{
            alert("false login admin")
        }
        
        
    });
   
}





