let currentUser = null;

const btn = document.getElementById("btn");

btn?.addEventListener("click", function (event) {
  event.preventDefault();

  const enterFullName = document.getElementById("fullName").value;
  const enterEmail = document.getElementById("email").value;
  const enterPassword = document.getElementById("password").value;
  const enterAge = document.getElementById("age").value;
  const enterCity = document.getElementById("city").value;

  if (!enterFullName || !enterEmail || !enterPassword || !enterAge || !enterCity) {
    alert("Please fill in all fields before registering.");
    return;
  }

  const details = {
    fullName: enterFullName,
    email: enterEmail,
    password: enterPassword,
    age: enterAge,
    city: enterCity,
    isLoggedIn: false,
  };

  window.location.href = `login.html?name=${enterFullName}&email=${enterEmail}&password=${enterPassword}&city=${enterCity}`;
});


const loginBtn = document.getElementById("loginBtn");
  const message = document.getElementById("message");


const params = new URLSearchParams(window.location.search);

const nameFromRegister = params.get("name");
const emailFromRegister = params.get("email");
const passwordFromRegister = params.get("password");

console.log(emailFromRegister);
console.log(passwordFromRegister);

loginBtn?.addEventListener("click", function (event) {
event.preventDefault();
const loginMail = document.getElementById("loginMail").value;
  const loginPassword = document.getElementById("loginPassword").value;


  if(loginMail === emailFromRegister && loginPassword === passwordFromRegister){
    window.location.href = `dashboard.html?name=${nameFromRegister}&email=${emailFromRegister}&password=${passwordFromRegister} `;
  }else{
      message.textContent = 'Invalid email or password'
  }
  console.log(loginMail)
  console.log(loginPassword)

});


function dashboard() {
  const dashboard = document.getElementById("dashboard");

  if (currentUser && currentUser.isLoggedIn === true) {
    dashboardcontent.innerHTML = `
      <h2>Welcome, ${currentUser.fullName}</h2>
      <p>Email:${currentUser.email}</p>
      <p>City: ${currentUser.city}</p>
      <p>Age: ${currentUser.age}</p>
    `;
  } else {
    dashboardcontent.innerHTML = `
      <a href="login.html">Go to Login</a>
      <a href="register.html">Go to Register</a>`;
  }
}
