const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check saved credentials when page loads
window.onload = function () {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  }
};

// Form submit
form.addEventListener("submit", function(e){
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Login as existing user
existingBtn.addEventListener("click", function(){
  const savedUser = localStorage.getItem("username");

  if(savedUser){
    alert(`Logged in as ${savedUser}`);
  }
});