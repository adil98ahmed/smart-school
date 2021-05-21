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


function addParent(){
    var flag=false;
    var index="";
    initialFirebase()
    var name = document.getElementById("nameSpace").value;
    var id = document.getElementById("idSpace").value;
    var address = document.getElementById("addressSpace").value;
    var phone = document.getElementById("nameSpace").value;
    var gender = document.getElementById("genderSpace").value;
    var Email = document.getElementById("emailSpace").value;
    var students = document.getElementById("studentSpace").value;
    var x1=firebase.database().ref().child("parent").push();
    var x2 = x1.key;
    x1.set({
        "address":address,
        "gender":gender,
        "id":id,
        "name":name,
        "phone":phone,
        "student":{"id":sessionStorage.getItem("studentId")},
        "email":Email,
        "photo":"images/"+imageName
        
    })
    
    /*initialFirebase()
    firebase.database().ref().child("parent").on('value',function gotData(data){
        var parents = data.val();
        var keys = Object.keys(parents);
        for (var i = 0 ; i<keys.length;i++){
            var key = keys[i];
            if(id == parents[key].id){
                flag = true;
                index = key;
            }
        }
    })
    */
    /*firebase.database().ref().child("parent").child(index).child("student").push().set({id:sessionStorage.getItem("studentId")},function(){alert("student added")});*/
    
   firebase.database().ref().child("parent").child(x2).child("student").push().set({"id":sessionStorage.getItem("studentId")});
    firebase.database().ref().child("parent").child(x2).child("student").child("id").remove();
    
    
}

function whenLoad(){
if(sessionStorage.getItem("studentId"))
{
    document.getElementById("studentSpace").value=sessionStorage.getItem("studentId");
    document.getElementById("idSpace").value = sessionStorage.getItem("parentId");
}   
}

/*sara.serag@xc.com*/
/*
القريه الذكيه مبن b2401 
الدور التاني


*/