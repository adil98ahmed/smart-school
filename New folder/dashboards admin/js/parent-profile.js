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
            sessionStorage.setItem("id","8888")
            console.log(sessionStorage.getItem("id"))
            initialFirebase();
            dbRef = firebase.database().ref().child("parent");
            dbRef.on('value',function gotData(data){
            var parents = data.val();
            var keys = Object.keys(parents)
               
            
            for (var i = 0 ; i < keys.length ; i++){
                
                var keys = Object.keys(parents);
                var k = keys[i];
                var id = parents[k].id;
                if (id == sessionStorage.getItem("id")){
                    var students = parents[k].student;
                    var keys2 = Object.keys(students);
                    document.getElementById("nameSpace").innerHTML=parents[k].name
                    document.getElementById("idSpace").innerHTML=parents[k].id
                    document.getElementById("addressSpace").innerHTML=parents[k].address
                    document.getElementById("emailSpace").innerHTML=parents[k].email
                    document.getElementById("phoneSpace").innerHTML=parents[k].phone
                    document.getElementById("genderSpace").innerHTML=parents[k].gender
                    //document.getElementById("studentSpace").innerHTML=parents[k].student
                    document.getElementById("photoSpace").innerHTML=parents[k].photo
                    for (var j = 0 ; j<keys2.length ;j++){
                        document.getElementById("studentSpace").innerHTML+=students[keys2[j]].id+" , "
                    }
                    
                }
            }
            
        })
       
    
}
