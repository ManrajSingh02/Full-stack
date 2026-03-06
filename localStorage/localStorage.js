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

        user = { username, password };

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
            password === storedUser.password) {
            localStorage.setItem("loggedInUser", storedUser.username);
            const time = new Date().toLocaleString();
            sessionStorage.setItem("time",time);


            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password");
        }
    });
}

console.log("login");

 



if (window.location.pathname.includes("dashboard.html")) {

    const loggedInUser = (localStorage.getItem("loggedInUser"));

    
    if (!loggedInUser) {
        alert("Please login first");
        window.location.href = "login.html";
    }
    
    
    const welcomeUser = document.getElementById("welcomeUser");
    const time = sessionStorage.getItem("time");
    if (welcomeUser && loggedInUser) {
        welcomeUser.innerText = "Welcome, " + loggedInUser + "\nlogin time"+time;
        
    }
}



const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("You are logged out");
        window.location.href = "login.html";
    });
}



const deleteBtn = document.getElementById("btn");

if (deleteBtn) {    
    deleteBtn.addEventListener("click", function () {
        localStorage.removeItem("user");
        localStorage.removeItem("loggedInUser");

        alert("Your account is deleted");
        window.location.href = "register.html";
    });
}

console.log("logout");