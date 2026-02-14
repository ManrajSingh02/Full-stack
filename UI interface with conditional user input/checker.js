    function detalis(){
       
  
    const enterName = document.getElementById("name").value;
      const enterAge = document.getElementById("age").value;
      const enterMathMarks =(document.getElementById("math").value);
    const  enterEnglishMarks =(document.getElementById("english").value);
    const enterScienceMarks =(document.getElementById("science").value)

      const stu = {
        name: enterName,
        age: enterAge,
        marks:{
            math: enterMathMarks,
            english: enterEnglishMarks,
            science: enterScienceMarks,
        }
      };

const total = student.marks.math + 
                  student.marks.english + 
                  student.marks.science;

    const average = total / 3;

    

      let message = "";



      if (stu.age < 18) {
        message = "You must be 18+ to pass";
        document.body.style.backgroundColor = "gray";
      }

        else if (average >= 75) {
        message = "Distinction";
        document.body.style.backgroundColor = "green";
    } 
    else if (average >= 40) {
        message = "Pass";
        document.body.style.backgroundColor = "orange";
    } 
      
       else {
        message = "fail";
        document.body.style.background = "red";
      }

      document.getElementById("nameOutput").textContent = "Name: " + stu.name;

      document.getElementById("ageOutput").textContent = "Age: " + stu.age;

      document.getElementById("averageOutput").textContent =
         "Average Marks: " + average.toFixed(2);

      document.getElementById("messageOutput").textContent =
        "Result: " + message;
    student.name = student.name.toUpperCase(); 
     student = {}; 
     }