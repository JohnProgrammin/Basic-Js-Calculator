// const monthname = document.getElementById('monthname');
// const dayname = document.getElementById('dayname');
// const daynumber = document.getElementById('daynumber');
// const year = document.getElementById('year');

// const date = new Date();
// monthname.innerText = date.toLocaleString("en", {
//   month: "long"
// });
// dayname.innerText = date.toLocaleString("en", {
//   weekday: "long"
// });

// daynumber.innerText = date.getDate();
// year.innerText = date.getFullYear();


// //Events
// const header = document.getElementById("header");

// header.addEventListener('mouseover', ()=>{
//   header.style.background = 'blue'
//   header.innerHTML = 'hello world'
//   header.style.color = 'white'
// })


const display = document.getElementById("display");

function appendToDisplay(input){
  display.value +=input
}

function clearDisplay (){
  display.value = ""
}
function calculate(){
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value = "Error"
  }
}
  display.value = eval()

