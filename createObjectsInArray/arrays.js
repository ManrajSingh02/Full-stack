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

  window.location.href = `login.html?name=${enterFullName}&email=${enterEmail}&password=${enterPassword}&city=${enterCity}`;
});



const loginBtn = document.getElementById("loginBtn");
 


const params = new URLSearchParams(window.location.search);


const emailFromRegister = params.get("email");
const passwordFromRegister = params.get("password");

console.log(emailFromRegister);
console.log(passwordFromRegister);


loginBtn?.addEventListener("click", function (event) {
  event.preventDefault();

  const loginMail = document.getElementById("loginMail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (!loginMail || !loginPassword) {
    alert("Please fill your Email & Password");
  } 
  else if (loginMail === emailFromRegister && loginPassword === passwordFromRegister) {
    window.location.href = `dashboard.html?email=${emailFromRegister}`;
    return;
  } 
  else {
    alert("Invalid email or password");
  }

  console.log(loginMail);
  console.log(loginPassword);
});


function dashboard() {
 const dashboardContent = document.getElementById("dashboardContent");

  if (!dashboardContent) return;

  const params = new URLSearchParams(window.location.search);

  const fullName = params.get("fullName");
  const email = params.get("email");
  const age = params.get("age");
  const city = params.get("city");

  if (fullName || email) {
    dashboardContent.innerHTML = `
      <h2>Welcome, ${fullName}</h2>
      <p>Email: ${email}</p>
      <p>City: ${city}</p>
      <p>Age: ${age}</p>
    `;
  } else {
    dashboardContent.innerHTML = `
      <a href="login.html">Go to Login</a><br>
      <a href="register.html">Go to Register</a>
    `;
  }
}

dashboard();