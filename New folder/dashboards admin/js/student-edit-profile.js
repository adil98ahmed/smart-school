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
                    document.getElementById("nameSpace").value=students[k].name
                    document.getElementById("genderSpace").value=students[k].gender
                    document.getElementById("dateOfBirthSpace").value=students[k].dateOfBirth
                    document.getElementById("religionSpace").value=students[k].religion
                    document.getElementById("emailSpace").value=students[k].Email
                    document.getElementById("admissionSpace").value=students[k].admissionDate
                    document.getElementById("classSpace").value=students[k].class
                    document.getElementById("addressSpace").value=students[k].address
                    document.getElementById("phoneSpace").value=students[k].phone
                    document.getElementById("imgSpace").setAttribute("src",students[k].photo)
                }
            }
            
        })
       }
}

ss()


function saveChanges(){
    console.log(document.getElementById("nameSpace").value);
    
    initialFirebase()
    dbRef = firebase.database().ref().child("student");
    dbRef.on('value',function getData(data){
        var students = data.val();
        var keys = Object.keys(students);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var id = students[k].id;
            if (id == sessionStorage.getItem("id")){
                firebase.database().ref().child("student").child(k).update({
                    
                    motherName:document.getElementById("motherSpace").value,
                    admissionDate:document.getElementById("admissionSpace").value,
                    name:document.getElementById("nameSpace").value,
                    gender:document.getElementById("genderSpace").value,
                    fatherName:document.getElementById("fatherSpace").value,
                    dateOfBirth:document.getElementById("dateOfBirthSpace").value,
                    relision:document.getElementById("religionSpace").value,
                    Email:document.getElementById("emailSpace").value,
                    classes:document.getElementById("classSpace").value,
                    address:document.getElementById("addressSpace").value,
                    phone:document.getElementById("phoneSpace").value,
                    imgSrc:document.getElementById("imgSpace").getAttribute("src"),
                    fatherOcuppation:document.getElementById("fathOccupSpace").value
                    
                    
                })
                window.alert("changes saved")
            }
            
        }
    })
    
}