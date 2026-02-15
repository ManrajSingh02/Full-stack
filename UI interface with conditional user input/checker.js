console.log("Button clicked");
document.getElementById("bt").addEventListener("click", detalis);

function detalis(event) {
  event.preventDefault();

  const enterName = document.getElementById("name").value;
  const enterAge = document.getElementById("age").value;
  const enterMathMarks = Number(document.getElementById("math").value);
  const enterEnglishMarks = Number(document.getElementById("english").value);
  const enterScienceMarks = Number(document.getElementById("science").value);

  const stu = {
    name: enterName,
    age: enterAge,
    marks: {
      math: enterMathMarks,
      english: enterEnglishMarks,
      science: enterScienceMarks,
    },
  };
  console.log("stu object created");
  const total = stu.marks.math + stu.marks.english + stu.marks.science;
  console.log("total object created");
  const average = total / 3;
  console.log("average object created");

  let message = "";

  console.log("let variable created");

  if (stu.age < 18) {
    message = "You must be 18+ to pass";
    document.body.style.backgroundColor = "gray";
  } else if (average >= 75) {
    message = "Distinction";
    document.body.style.backgroundColor = "green";
  } else if (average >= 40) {
    message = "Pss";
    document.body.style.backgroundColor = "orange";
  } else {
    message = "fail";
    document.body.style.background = "red";
  }

  document.getElementById("nameOutput").textContent = "Name: " + stu.name;

  document.getElementById("ageOutput").textContent = "Age: " + stu.age;

  document.getElementById("averageOutput").textContent =
    "Average Marks: " + average.toFixed(2);

  document.getElementById("messageOutput").textContent = "Result: " + message;
}
