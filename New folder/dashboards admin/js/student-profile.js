
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
    if(sessionStorage.getItem("id")!=null){
            console.log(sessionStorage.getItem("id"))
            initialFirebase();
            dbRef = firebase.database().ref().child("student");
            dbRef.on('value',function gotData(data){
            var students = data.val();
            var keys = Object.keys(students);
            for (var i = 0 ; i < keys.length ; i++){
                var k = keys[i];
                var id = students[k].id;
                if (id == sessionStorage.getItem("id")){
                    document.getElementById("nameSpace").innerHTML=students[k].name
                    document.getElementById("genderSpace").innerHTML=students[k].gender
                    document.getElementById("dateOfBirth").innerHTML=students[k].dateOfBirth
                    document.getElementById("religionSpace").innerHTML=students[k].religion
                    document.getElementById("emailSpace").innerHTML=students[k].email
                    document.getElementById("admissionSpace").innerHTML=students[k].admissionDate
                    document.getElementById("classSpace").innerHTML=students[k].classId
                    document.getElementById("addressSpace").innerHTML=students[k].address
                    document.getElementById("phoneSpace").innerHTML=students[k].phone
                    document.getElementById("imgSpace").setAttribute("src",students[k].imgSrc)
                }
            }
            
        })
       }
}

ss()

