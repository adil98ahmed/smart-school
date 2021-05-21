function ss(){
    if(sessionStorage.getItem("username")== null){
        window.location.href="../../login/admin.html";
    }
}
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
