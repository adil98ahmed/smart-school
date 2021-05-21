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
            dbRef = firebase.database().ref().child("teacher");
            dbRef.on('value',function gotData(data){
            var teachers = data.val();
            var keys = Object.keys(teachers);
            for (var i = 0 ; i < keys.length ; i++){
                var k = keys[i];
                var id = teachers[k].id;
                if (id == sessionStorage.getItem("id")){
                    document.getElementById("nameSpace").value=teachers[k].name
                    document.getElementById("genderSpace").value=teachers[k].gender
                    document.getElementById("hireSpace").value=teachers[k].hireDate
                    document.getElementById("salarySpace").value=teachers[k].salary
                    document.getElementById("dateOfBirthSpace").value=teachers[k].dateOfBirth
                    document.getElementById("religionSpace").value=teachers[k].relision
                    document.getElementById("fatherSpace").value=teachers[k].name
                    document.getElementById("emailSpace").value=teachers[k].Email
                    document.getElementById("admissionSpace").value=teachers[k].name
                    document.getElementById("classesSpace").value=teachers[k].classes
                    document.getElementById("subjectSpace").value=teachers[k].subject
                    document.getElementById("addressSpace").value=teachers[k].address
                    document.getElementById("phoneSpace").value=teachers[k].phone
                    document.getElementById("imgSpace").setAttribute("src",teachers[k].imgSrc)
                }
            }
            
        })
       }
}

ss()


function addTeacher(){
    console.log(document.getElementById("nameSpace").value);
    
    initialFirebase()
    dbRef = firebase.database().ref().child("teacher");
    dbRef.on('value',function getData(data){
        var teachers = data.val();
        var keys = Object.keys(teachers);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var id = teachers[k].id;
            if (id == sessionStorage.getItem("id")){
                firebase.database().ref().child("teacher").child(k).update({
                    name:document.getElementById("nameSpace").value,
                    gender:document.getElementById("genderSpace").value,
                    hireDate:document.getElementById("hireSpace").value,
                    salary:document.getElementById("salarySpace").value,
                    dateOfBirth:document.getElementById("dateOfBirthSpace").value,
                    relision:document.getElementById("religionSpace").value,
                    Email:document.getElementById("emailSpace").value,
                    classes:document.getElementById("classesSpace").value,
                    subject:document.getElementById("subjectSpace").value,
                    address:document.getElementById("addressSpace").value,
                    phone:document.getElementById("phoneSpace").value,
                    imgSrc:document.getElementById("imgSpace").getAttribute("src")
                    
                    
                })
                window.alert("changes saved")
            }
            
        }
    })
    
}