@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300);


body
{
    overflow-x: hidden;
}

html, body {
  margin: 0;
  font-family: 'Roboto';
}
.navbar-light .navbar-brand
{
    color: #fff !important;
}
.navall
{
   background-color:  #253b80 !important;
    z-index: 1121212 !important;
}
.paddallpage
{
    padding-top: 2%;
}

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: "Arial", sans-serif;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

.side{
    background:#253b80;
    position: fixed;
    top:0; left: 0;
    height: 100%;
    min-width: 60px;
    min-height: 180px;
    margin-top: 5%;
}

/*_____________меню гамбургер_____________*/
.side::before{
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #fff;
    position: absolute;
    top:30px; right: 25px;
    box-shadow: 0 10px 0 #fff,
                0 20px 0 #fff;
}

.content{
    display: none;
    width: 180px;
    padding: 60px 10px;
}

.side:hover .content{
    display:block;
}

/*_____________меню гамбургер_____________*/
.side:hover::before{
    width: 200px;
    opacity: 0;
    transition: all .5s ease;
}
.side:not(:hover)::before{
    width: 30px;
    opacity: 1;
    transition: all .5s ease;
}

/*_____________сама боковая панель_____________*/
.side:hover {
    width: 250px;
    transition: width 1s ease;
}
.side:not(:hover){
    width: 80px;
    transition: width 1s ease;
}

.logo{
    position: relative;
    margin-left: 20px;
}

.logo a{
    font-family: 'Comfortaa', cursive;
    text-decoration: none;
    color: #fff;
    font-size: 32px;
    text-shadow: 0 0 10px red;
    padding-left: 20px;
}
/*_____________круг_____________*/

.content:hover .logo::before{
    opacity: 1;
    transition: opacity 1s ease;
}

.content:not(:hover) .logo::before{
    opacity: 0;
    transition: all 1s ease 1s;
}

.nav{
    list-style: none;
    margin-top: 40px;
    margin-left: 35%;

}


.nav a{ 
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
    line-height: 50px;
}
/*_____________стрелочки_____________*/
.nav a::before{  
    content: "";
}

.nav a:hover::before{
    display: inline-block;
    width: 0; height: 0;
    border: 5px solid transparent; 
    border-left: 6px solid #fff;
    margin-right: 5px;
    transition: margin-right .5s ease;
}

.nav a:not(hover)::before{
    margin-right: 0;
    transition: margin-right 1s ease;
} 

@keyframes logoo{
   
    100%{
        transform: translate(0, 0);
        opacity: 1;
    }
}

.pagepadd
{
    padding-left: 18%;
    
}
.serviceBox{
    padding-left: 30px;
    position: relative;
}
.serviceBox:before{
    content: "";
    width: 60px;
    height: 60px;
    background: #253b80 ;
    position: absolute;
    top: 20px;
    left: 5px;
    z-index: 1;
}
.serviceBox .service-icon{
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #03A9F4;
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 0;
    z-index: 1;
}
.serviceBox .service-content{
    padding: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: #d5d5d5 #d5d5d5 #3f4147;
    position: relative;
    transition: all 0.4s ease-in-out 0s;
}
.serviceBox:hover .service-content{
    background: #253b80;
    border-color: #9fdff9;
}
.serviceBox .title{
    font-size: 18px;
    font-weight: 600;
    color: #333;
    padding-left: 30px;
    margin-bottom: 35px;
    text-transform: capitalize;
    transition: all 0.4s ease-in-out 0s;
}
.serviceBox:hover .title{
    color: #fff;
}
.serviceBox .description{
    font-size: 14px;
    color: #d6d6d6;
    margin: 0;
}
.serviceBox .read-more{
    display: inline-block;
    width: 32px;
    height: 30px;
    line-height: 30px;
    background: #3f4147;
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    position: absolute;
    bottom: 0;
    right: -1px;
    text-align: center;
    transition: all 0.4s ease-in-out 0s;
}
.serviceBox .read-more:hover{
    background: #2a2b2c;
}
@media only screen and (max-width:990px){
    .serviceBox{ margin-bottom: 50px; }
}

@media only screen and (max-width:700px){
.side{

    margin-top: 9%;
}
}
@media only screen and (max-width:800px){
    .form-inline
    {
        width:40%;
    }
    .form-control {
    width: 50%;
    padding: .075rem .075rem;
    }
    
    .paddallpage
{
    padding-top: 15%;
}
    .table-e
    {
        padding-left: 10%;
    }
    
    .side{

    margin-top: 12%;
}

    
}

.table-e
{
    padding-left: 5%;
}
.table
{
    width: 80%;
    margin-top: 5%;
}