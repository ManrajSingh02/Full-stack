
let user = JSON.parse(localStorage.getItem("user"));


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please fill all fields");
            return;
        }

        user = {
            username: username,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    });
}

console.log("register");




const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

 
    if (storedUser &&
        username === storedUser.username &&
        password === storedUser.password) 
    {
        localStorage.setItem("storedUser", JSON.stringify(storedUser));
        window.location.href = "dashboard.html";
        return;
    }
    else{
    alert("Invalid username or password");
}
});
}


console.log("loginForm");



const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", function () { 
        window.location.href = "login.html";
    });


console.log("logout");