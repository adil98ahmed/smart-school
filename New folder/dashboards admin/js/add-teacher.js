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


var  imageName="";
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


function addTeacher(){
    initialFirebase();
    var name = document.getElementById("nameSpace").value,
        id = document.getElementById("idSpace").value,
        gender = document.getElementById("genderSpace").value,
        hire = document.getElementById("hireSpace").value,
        salary = document.getElementById("salarySpace").value,
        dateOfBirth = document.getElementById("dateOfBirthSpace").value,
        religion = document.getElementById("religionSpace").value,
        email = document.getElementById("emailSpace").value,
        admission = document.getElementById("admissionSpace").value,
        classes = document.getElementById("classesSpace").value,
        subject = document.getElementById("subjectsSpace").value,
        address = document.getElementById("addressSpace").value,
        phone = document.getElementById("phoneSpace").value,
        path = "images"
        
        dbRef=firebase.database().ref().child("teacher");
        dbRef.push().set({
            "name":name,
            "id":id,
            "gender":gender,
            "hireDate":hire,
            "salary":salary,
            "dateOfBirth":dateOfBirth,
            "relision":religion,
            "Email":email,
            "admissionDate":admission,
            "classes":classes,
            "subject":subject,
            "address":address,
            "phone":phone,
            "imgSrc":"images/"+imageName
        });
        
    
        //dbRef.child('a7a').child("dks").set("dsdasasa").push
        
}


