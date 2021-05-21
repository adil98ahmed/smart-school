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


var imgName = "";

function imgchange(f) {
           var filePath = document.getElementById("file").value;
           var reader = new FileReader();
           reader.onload = function (e) {
            document.getElementById('imgs').setAttribute('src',e.target.result);
               
               
           };
           reader.readAsDataURL(f.files[0]);    
            imageName = filePath.substring(filePath.lastIndexOf('/')+13);
            console.log(imageName)
        }

var flag = false;

function addStudent(){
    var index;
    initialFirebase()
    dbStudentRef = firebase.database().ref().child("student");
    dbParentRef = firebase.database().ref().child("parent");
    
    var name = document.getElementById("nameSpace").value,
            id = document.getElementById("idSpace").value,
            gender = document.getElementById("genderSpace").value,
            parentId = document.getElementById("parentSpace").value,
            dateOfBirth = document.getElementById("dateOfBirthSpace").value,
            religion = document.getElementById("religionSpace").value,
            fatherJob = document.getElementById("fathOccupSpace").value,
            email = document.getElementById("emailSpace").value,
            admission = document.getElementById("admissionSpace").value,
            grade = document.getElementById("gradeSpace").value,
            classID = document.getElementById("classSpace").value,
            address = document.getElementById("addressSpace").value,
            phone = document.getElementById("phoneSpace").value
    
    
    dbParentRef.on('value',function getData(data){
        var parents = data.val();
        var keys = Object.keys(parents)
        console.log(keys.length)
        for ( var i =0;i<keys.length;i++){
            var key = keys[i]
            if(parentId == parents[key].id){
                flag =true;
                index = key;
                console.log(index)
            }
            
        }
        
        
    })
    setTimeout(function(){
        if(flag==true){
        console.log(flag)
        dbStudentRef.push().set(
        {
           "name":name,
            "id":id,
            "activities":"",
            "admissionDate":"",
            "attendance":"",
            "classId":classID,
            "degrees":address,
            "email":email,
            "gender":gender,
            "grade":grade,
            "parentId":parentId,
            "phone":phone,
            "photo":"",
            "religion":religion
            
        });
        dbParentRef.child(index).child("student").push().set({"id":id});
    }
    
    else if(flag==false){
        console.log(flag)
        sessionStorage.setItem("studentId",id)
        sessionStorage.setItem("parentId",parentId)
        window.open  ( "add-parent.html");
    }
    },2000)
    
    console.log("snalsn")
    
    

    
                
        
    
}