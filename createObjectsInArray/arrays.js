
const array = [];

let currentUser = null;
currentUser = array[0];


function registerdata() {
  const enterFullName = document.getElementById("fullName").value;
  const enterEmail = document.getElementById("email").value;
  const enterPassword = document.getElementById("password").value;
  const enterAge = document.getElementById("age").value;
  const enterCity = document.getElementById("city").value;


  const details = {
    fullName: enterFullName,
    email: enterEmail,
    password: enterPassword,
    age: enterAge,
    city: enterCity,
     isLoggedIn: false
  };

array.push(details);


  window.location.href = "login.html";
}


function logindata() {
  const loginMail = document.getElementById("loginMail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  const message = document.getElementById("message");

 if (array[0] && array[0].email === loginMail && array[0].password === loginPassword) {
    currentUser = array[0];
  } else if (array[1] && array[1].email === loginMail && array[1].password === loginPassword) {
    currentUser = array[1];
  } else if (array[2] && array[2].email === loginMail && array[2].password === loginPassword) {
    currentUser = array[2];
  } else {
    message.textContent = "Invalid email or password";
    return;
  }

  currentUser.isLoggedIn = true;

  window.location.href = "dashboard.html";
}
 




function dashboard(){
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