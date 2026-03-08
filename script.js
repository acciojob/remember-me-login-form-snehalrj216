//your JS code here. If required.
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let existing = document.getElementById("existing");
let form = document.getElementById("loginForm");


window.onload = function(){

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(savedUser && savedPass){
        existing.style.display = "block";
    }

}


form.addEventListener("submit", function(e){

    e.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert("Logged in as " + user);

    if(checkbox.checked){
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "block";
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }

});


existing.addEventListener("click", function(){

    let savedUser = localStorage.getItem("username");

    if(savedUser){
        alert("Logged in as " + savedUser);
    }

});