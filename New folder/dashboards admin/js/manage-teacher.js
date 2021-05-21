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
    initialFirebase();
    dbRef = firebase.database().ref().child("teacher");
    dbRef.on('value',function gotData(data){
        var teachers = data.val();
        var keys = Object.keys(teachers);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var name = teachers[k].name , 
                email = teachers[k].Email,
                address = teachers[k].address,
                dateOfBirth = teachers[k].dataOfBirth,
                gender = teachers[k].gender,
                hireDate = teachers[k].hireDate,
                id = teachers[k].id,
                phones = teachers[k].phone,
                subject = teachers[k].subject,
                classes = teachers[k].classes
            
            var classes2 = classes
            var phones2 = phones
            var tbody=document.getElementById("tbody")

            var newTr = document.createElement('tr')

            var th = document.createElement('th')

            var tdName = document.createElement('td');
            tdName.classList = "name";

            var tdGender = document.createElement('td');

            var tdPhone = document.createElement('td');

            var tdEmail = document.createElement('td');
            
            var tdHireDate = document.createElement('td');

            var tdSubject = document.createElement('td');

            var tdClasses = document.createElement('td');

            var tdAction = document.createElement('td');

            var tdName = document.createElement('td');

            var tdActions = document.createElement('div')

            var viewLink = document.createElement('a')

            var editLink = document.createElement('a')

            var deleteButton = document.createElement('button')

            var editButton = document.createElement('button')

            var viewButton = document.createElement('button')

            var actionsDiv = document.createElement('div')
            
            newTr.appendChild(th)
            newTr.appendChild(tdName)
            newTr.appendChild(tdGender)
            newTr.appendChild(tdPhone)
            newTr.appendChild(tdEmail)
            newTr.appendChild(tdHireDate)
            newTr.appendChild(tdSubject)
            newTr.appendChild(tdClasses)

            editLink.appendChild(editButton)
            viewLink.appendChild(viewButton)

            actionsDiv.appendChild(viewLink)
            actionsDiv.appendChild(editLink)


            actionsDiv.appendChild(deleteButton)

            tdAction.appendChild(actionsDiv)





            newTr.appendChild(actionsDiv)


            tbody.appendChild(newTr);
            th.setAttribute("scope","row")
            th.innerHTML=id
            tdName.innerHTML=name
            tdGender.innerHTML=gender
            tdPhone.innerHTML = phones2
            tdEmail.innerHTML=email
            tdHireDate.innerHTML=hireDate
            tdSubject.innerHTML=subject
            tdClasses.innerHTML = classes2
            tdAction



            th.scope="row"
            actionsDiv.className = "btn-group actions "
            actionsDiv.role = "group"
            actionsDiv["aria-label"] = "Basic example"

            viewButton.className = "btn  btn-sm btn-outline-primary view "
            viewButton.innerHTML = "View"

            editButton.className = "btn  btn-sm btn-outline-success"
            editButton.innerHTML = "Edit"

            deleteButton.className = "btn  btn-sm btn-outline-danger"
            deleteButton.innerHTML = "Delete"




            
        }
        var rows = document.getElementById("tbody").children;
        var row = document.getElementById("tbody").children[0];
        var rowNumber = document.getElementById("tbody").childElementCount;
        for (var i =0 ; i < rowNumber;i++){
            var buton1 = rows[i].childNodes[8].childNodes[0].childNodes[0].onclick = function(e){
                var id2 = e.target.parentNode.parentNode.parentNode.children.item(0).innerHTML
                sessionStorage.setItem("id",id2)
                var queryString = "?"+id2;
                window.open("teacher-profile.html"+queryString)
                
                
            }   
        }
        
        for (var i =0 ; i < rowNumber;i++){
            var buton1 = rows[i].childNodes[8].childNodes[1].childNodes[0].onclick = function(e){
                var id2 = e.target.parentNode.parentNode.parentNode.children.item(0).innerHTML
                sessionStorage.setItem("id",id2)
                var queryString = "?"+id2;
                window.open("teacher-edit-profile.html"+queryString)
                
                
            }
  
        }
    })
}






















/*
for (var i =0;i<3;i++){
    
var tbody=document.getElementById("tbody")

var newTr = document.createElement('tr')

var th = document.createElement('th')

var tdName = document.createElement('td');

var tdGender = document.createElement('td');

var tdPhone = document.createElement('td');

var tdEmail = document.createElement('td');

var tdHireDate = document.createElement('td');

var tdSubject = document.createElement('td');

var tdClasses = document.createElement('td');

var tdAction = document.createElement('td');

var tdName = document.createElement('td');

var tdActions = document.createElement('div')

var viewLink = document.createElement('a')

var editLink = document.createElement('a')

var deleteButton = document.createElement('button')

var editButton = document.createElement('button')

var viewButton = document.createElement('button')

var actionsDiv = document.createElement('div')

newTr.appendChild(th)
newTr.appendChild(tdName)
newTr.appendChild(tdGender)
newTr.appendChild(tdPhone)
newTr.appendChild(tdEmail)
newTr.appendChild(tdHireDate)
newTr.appendChild(tdSubject)
newTr.appendChild(tdClasses)

editLink.appendChild(editButton)
viewLink.appendChild(viewButton)

actionsDiv.appendChild(viewLink)
actionsDiv.appendChild(editLink)


actionsDiv.appendChild(deleteButton)

tdAction.appendChild(actionsDiv)


newTr.appendChild(tdAction)



newTr.appendChild(actionsDiv)


tbody.appendChild(newTr);

th.setAttribute("scope","row")
th.innerHTML="2"
tdName.innerHTML="Adil"
tdGender.innerHTML="salj"
tdPhone.innerHTML = "kshb"
tdEmail.innerHTML="dn"
tdHireDate.innerHTML="khcs"
tdSubject.innerHTML="khds"
tdClasses.innerHTML = "shab"
tdAction


viewLink.setAttribute("href","teacher-profile.html");

th.scope="row"
actionsDiv.className = "btn-group actions"
actionsDiv.role = "group"
actionsDiv["aria-label"] = "Basic example"

viewButton.className = "btn  btn-sm btn-outline-primary"
viewButton.innerHTML = "View"

editButton.className = "btn  btn-sm btn-outline-success"
editButton.innerHTML = "Delete"

deleteButton.className = "btn  btn-sm btn-outline-danger"
deleteButton.innerHTML = "Delete"





}





















*/











































