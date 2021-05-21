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
    var dbRefSubjects = firebase.database().ref().child("student").child("subjects");
    dbRef.on('value',function gotData(data){
        var students = data.val();
        var keys = Object.keys(students);
        
        for(var i = 0 ; i < keys.length ; i++){
            
            var k = keys[i];
            if(students[k].teacherId == sessionStorage.getItem("id")){
                
                dbRefSubjects.on('value',function gotData2(data2){
                    var subjects = data2.val();
                    var keys2 = Object.keys(subjects);
                    for( var j = 0 ; j < keys2.length ; j++){
                        var k2= keys2[i]
                        if(sessionStorage.getItem("id")== subjects[k2].teacherId){
                            var tbody=document.getElementById("tbody")

                            var newTr = document.createElement('tr')
                            
                            var tdName = document.createElement('th')
             
                            var tdId = document.createElement('td');
                            
                            var tdGrade = document.createElement('td');
             
                            var tdDegree = document.createElement('td');
            
                            var tdNote = document.createElement('td');
            
                            var tdSave = document.createElement('td');
            
                            var saveButton = document.createElement('button')
            
                            var DegreeSpace = document.createElement('input');
            
                            var NoteSpace = document.createElement('textare');
            
            
                            tdDegree.appendChild(DegreeSpace)
                            tdNote.appendChild(NoteSpace)
            
                            DegreeSpace.className="form-control";
                            DegreeSpace["aria-lable"]="Sizing example input";
                            DegreeSpace["aria-describedby"]="aria-describedby";
               
                            NoteSpace.className="form-control"
                            saveButton.className="btn btn-primary save";
                
                            tdDegree.appendChild(DegreeSpace)
                            tdNote.appendChild(NoteSpace)
                            tdSave.appendChild(saveButton)
            
            
            
                            newTr.appendChild(tdName)
    
                            newTr.appendChild(tdDegree)
                       
                            newTr.appendChild(tdNote)
            
                            newTr.appendChild(tdId);
            
                            newTr.appendChild(tdGrade)
            
                            newTr.appendChild(tdSave)
            
                            tbody.append(newTr);
                        }
                    }
                })
            
                
            }
            

            
            
                            
        }
    })
    
    
    setTimeout(function(){
        initialFirebase()
        document.getElementsByClassName("save");
        
        var rows = document.getElementById("tbody").children;
        var rowNumber = document.getElementById("tbody").childElementCount;
        console.log(rows[0].childNodes[11].innerHTML)
        
        
        for (var i =0 ; i < rowNumber;i++){
            var buton1 = rows[i].childNodes[11].onclick = function(e){
                var id2 = e.target.parentNode.parentNode.children.item(1).innerHTML
                var dbRef = firebase.database().ref().child("student");
                dbRef.on('value',function gotData(data){
                    var students = data.val();
                    var keys = Object.keys(students);
                    for(var j = 0 ; j < keys.length ;j++){
                        var k = keys[j];
                        if(students[k].id == id2){
                           var subjects = students[k].subjects;
                            var keys2 = Object.keys(subjects);
                            for(var z=0;z<keys2.length;z++){
                                var k2 = keys2[z];
                                if(subjects[k2].teacherId == sessionStorage.getItem("id")){
                                    firebase.database().ref().child("student").child(k).child("subjects").child("note").set(rows[0].childNodes[9].value)
                                    firebase.database().ref().child("student").child(k).child("subjects").child("degree").set(rows[0].childNodes[7].value)
                                    
                                }
                            }
                        }
                    }
                })
                alert("changes saved")
                
            }   
        }
    },1000)
}


