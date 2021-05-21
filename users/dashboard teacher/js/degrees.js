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
    
    initialFirebase()
    var dbRef = firebase.database().ref().child("student");
    var dbRef2 = firebase.database().ref().child("student");
    var degree;
    dbRef.on('value',function gotData(data){
        var students = data.val();
        var keys = Object.keys(students);
        
        
        
        for(var i = 0 ; <keys.length ; i++){
            var k = keys[i];
            if(students[k].teacherId == sessionStorage.getItem("id")){
                dbRef2.child(students[k]).child("subjects").on('value',function gotData(data2){
                    var subjects = data2.val();
                    var keys2 = Object.keys(subjects);
                    for(var j =0;j<keys2.length;j++){
                        var k2=keys2[j];
                        if(subjects[k2].teacherId == students[k].teacherId){
                            degree = subjects[k2].degree;
                            var tbody=document.getElementById("tbody")

                            var newTr = document.createElement('tr')
                            
                            var tdName = document.createElement('th')

                            var tdDegree = document.createElement('td');
                            
                            var tdNote = document.createElement('td');
                            
                            newTr.appendChild(tdName)
                            newTr.appendChild(tdDegree)
                            newTr.appendChild(tdNote)
                            
                            tbody.appendChild(newTr);
                            th.scope="row"
                            tdName.innerHTML=students[k].name;
                            tdDegree.innerHTML=subjects[k2].degree;
                            tdNote.innerHTML=subjects[k2].note;
                        }
                    }
            
            })
                
            }
        }
    })
}