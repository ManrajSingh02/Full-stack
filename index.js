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


// console.log(document.getElementById('sampleButton'))
document.getElementById('sampleButton').addEventListener('click',function(){
    const number=4

    if(number===4){
        alert("if condition is true")
    }
    else{
        alert("else condition is true")
    }
})



const firstname = 'Manraj';
const lastname = 'singh';
const age=23;
const address='phagwara';
const istutor='true';

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(address);
console.log(istutor);




const stuobj={
  firstname: "Mani",
  lastname:"Singh",
  age:23,
  address:"Phagwara",
  study:"MCA",
}

console.log(stuobj);
console.log(stuobj.study);



const mobileobj={
    companyname:"Oneplus", 
    model:"oneplus12r",
    launchyear:"2024",
    storage:"8gb,256gb",
}

console.log(mobileobj);
console.log(mobileobj.model);



const carobj={
    companyname:"rangerover", 
    model:"sports",
    launchyear:"2024",
    seater:"7",
}

console.log(carobj);
console.log(carobj.model);