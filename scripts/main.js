// document.addEventListener("DOMContentLoaded", () => {
//     const myHeading = document.querySelector("h1");
//     myHeading.textContent = "Hello world!";
// })

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }

myButton.onclick = () => {
    setUserName();
};

// // definisce una variabile blocco
// let myVariabile = "bob";

// myVariabile = 10;
// myVariabile = [1, "bob", "steve", 10]
// console.log(myVariabile[2]);

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite…");
// }

// //dichiarazione di una funzione
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// console.log(multiply(4, 6));
// console.log(multiply(5, 7));
// console.log(multiply(6, 8));