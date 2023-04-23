// // array.forEach((e)=> void)

// const buttons = document.querySelectorAll("button")
// const inputDisplay = document.querySelector(".display")

// buttons.forEach(button => {
//     button.addEventListener("click", calculate)
// })

// function calculate(e) {

//     const btnValue = e.target.value

//     if (btnValue === "=") {
//         if (inputDisplay.value !== "") {
//             inputDisplay.value = eval(inputDisplay.value)
//         }
//     } else if (btnValue === "c") {
//         inputDisplay.value = ""
//     } else {
//         inputDisplay.value += btnValue
//     }
// }

// gather all buttons in 1 array
// const buttons = document.querySelectorAll("button")

// const inputDisplay = document.querySelector(".display")

//Function to select one button at a time

// buttons.forEach(button => {
//     button.addEventListener("click", calculate)
// })

// function calculate(e) {
//     const btnValue = e.target.value
// console.log (btnValue)
//     if (btnValue === "=") {
//         if (inputDisplay.value !== "") {
//             inputDisplay.value = eval(inputDisplay.value)
//         }
//     } else if (btnValue === "c") {
//         inputDisplay.value = ""
//     } else {
//         inputDisplay.value += btnValue
//     }

const buttons = document.querySelectorAll("button");
const inputDisplay = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", calculate);
});

function calculate(e) {
  const btnValue = e.target.value;

  if (btnValue === "=") {
    if (inputDisplay.value !== "") {
      inputDisplay.value = eval(inputDisplay.value);
    }
  } else if (btnValue === "c") {
    inputDisplay.value = "0";
  } else {
    inputDisplay.value += btnValue;
  }
}
