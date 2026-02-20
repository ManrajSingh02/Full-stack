
const userObj = {
  name: "John",
  age: 22,
  address: "H No. 11",
  isLoggedIn: true,
  role: "user",
  favoriteColor: ["red", "blue"]
};

console.log("User Object Created:", userObj);

function generateUserSummary(user, greeting = "Welcome") {
  
  const {name,age,address,isLoggedIn,role,favoriteColor} = user;

  console.log("Destructured Values:", { name, age, address, isLoggedIn, role, favoriteColor });

  let statusMessage;

  if (isLoggedIn) {
    statusMessage = "Status: Logged In";
    console.log("User is logged in.");
  } else {
    statusMessage = "Status: Not Logged In";
    console.log("User is NOT logged in.");
  }

  const color = favoriteColor[1];
  console.log("First Favorite Color:", color);

  const finalMessage = `
${greeting} ${name}.
You are ${age} years old and live at ${address}.
Role: ${role}.
${statusMessage}.
Your favorite color is ${color}.`;

  console.log("Final Generated Message:", finalMessage);

  return finalMessage;
}


function displayUserInterface(message) {
  
  const mainElement = document.getElementById("main");

  console.log("element name:",mainElement)

  mainElement.innerHTML = `<p>${message}</p>`;

  console.log("UI updated successfully.");
}


const summary = generateUserSummary(userObj);

console.log("Returned Summary:", summary);  


displayUserInterface(summary);








const user = {
  firstName: "Mani",
  lastName: "Singh",
  age: 25,
  address: "New York",
  istutor: false
};

function generateUser(user, Hello = "Hi") {
  const { firstName, lastName, age, address, istutor } = user;

  return `${Hello}, ${firstName} ${lastName}!
 You are ${age} years old
 You live in ${address}
 Tutor: ${istutor ? "Tutor" : "Student"}`;
}

document.getElementById("output").innerText = generateUser(user);
