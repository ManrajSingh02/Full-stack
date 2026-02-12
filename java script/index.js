bt1.addEventListener('click',function(){
 alert('You are using browser');
});


document.getElementById('bt2').addEventListener('click',function(){
 document.getElementById('para').innerText='text change';
});



document.getElementById('bt3').addEventListener('click',function(){
 document.getElementById('container').style.backgroundColor='orange';
});



bt4.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "green") {
    document.body.style.backgroundColor = "orange";
  } else {
 
    document.body.style.backgroundColor = "green";
  }
});


document.getElementById('sampleButton').addEventListener('click',function(){
    const number=4

    if(number===4){
        alert("if condition is true")
    }
    else{
        alert("else condition is true")
    }
})

document.getElementById('toggleButton').addEventListener('click',function(){
if(document.body.style.background === "yellow"){
  document.body.style.background="blue";
}
else{
  document.body.style.background="yellow";
}
})



const firstName = 'Manraj';
const lastName = 'singh';
const age=23;
const address='phagwara';
const istutor='true';

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(address);
console.log(istutor);




const stuDetails={
  firstName: "Mani",
  lastName:"Singh",
  age:23,
  address:"Phagwara",
  study:"MCA",
}

console.log(stuDetails);
console.log(stuDetails.study);



const mobileModel={
    companyName:"Oneplus", 
    model:"oneplus12r",
    launchYear:"2024",
    storage:"8gb,256gb",
}

console.log(mobileModel);
console.log(mobileModel.model);



const carObj={
    companyName:"rangerover", 
    model:"sports",
    launchYear:"2024",
    seater:"7",
}

console.log("Car Details:",carObj);
console.log("Car Model:",carObj.model);



print1.textContent=stuDetails.firstName 
print2.textContent=stuDetails.lastName
print3.textContent=mobileModel.launchYear
print4.textContent=carObj.companyName



document.getElementById("FullName").textContent =
    "FullName: " + stuDetails.firstName + " " + stuDetails.lastName;

document.getElementById("address").textContent =
    "City: " + stuDetails.address;

document.getElementById("study").textContent =
    "Education: " + stuDetails.study;

    document.getElementById("launch").textContent =
    "mobilelaunchyear: " + mobileModel.model +" "+ mobileModel.launchYear;


