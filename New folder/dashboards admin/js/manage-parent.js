'use strict';

var search = document.getElementById('search'), 
    searchWrapper = document.getElementById('search-wrapper'), 
    closeIcon = document.getElementById('close-icon');

// Input focus
search.onfocus = function() {
  searchWrapper.classList.add('search-expanded');
  this.addEventListener('transitionend', function() {
    closeIcon.style.display = 'block';
  });
}

// Input blur
search.onblur = function() {
  
  searchWrapper.classList.remove('search-expanded');
  closeIcon.classList.add('closing');
  
  this.addEventListener('transitionend', function() {
    closeIcon.classList.remove('closing');
    closeIcon.style.display = 'none';
  });
  
}

// Close
closeIcon.onclick = function() {
  
  this.classList.add('closing');
  
  document.activeElement.blur();
  
  setTimeout(function() {
    closeIcon.classList.remove('closing');
  }, 1000);
  
}



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
    var dbRef = firebase.database().ref().child("parent");
    dbRef.on('value',function gotData(data){
        var parents = data.val();
        var keys = Object.keys(parents);
        for (var i = 0 ; i < keys.length ; i++){
            var k = keys[i];
            var name = parents[k].name , 
                email = parents[k].email,
                address = parents[k].address,
                gender = parents[k].gender,
                id = parents[k].id,
                phones = parents[k].phone;
            //var students =JSON.parse ((parents[k].student).toString());
            var students = (parents[k].student);
            
            var keys2=Object.keys(students);
            var classes2 = students
            var phones2 = phones
            console.log(students[keys2[0]].id)
            var tbody=document.getElementById("tbody")
            
            var newTr = document.createElement('tr')

            var th = document.createElement('th')

            var tdName = document.createElement('td');
            tdName.classList = "name";

            var tdGender = document.createElement('td');

            var tdPhone = document.createElement('td');

            var tdEmail = document.createElement('td');
            


            var tdStudents = document.createElement('td');

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
            newTr.appendChild(tdStudents)

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
            
            for (var j=0 ; j<keys2.length;j++){
                tdStudents.innerHTML += students[keys2[j]].id+" , "
            }
            
            tdAction



            th.scope="row"
            actionsDiv.className = "btn-group actions"
            actionsDiv.role = "group"
            actionsDiv["aria-label"] = "Basic example"

            viewButton.className = "btn  btn-sm btn-outline-primary view"
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
            var buton1 = rows[i].childNodes[6].childNodes[0].childNodes[0].onclick = function(e){
                var id2 = e.target.parentNode.parentNode.parentNode.children.item(0).innerHTML
                sessionStorage.setItem("id",id2)
                var queryString = "?"+id2;
                window.open("parent-profile.html"+queryString)
                
                
            }   
           
        }
        
        
        
        
        
    })
}

