const myButton = document.getElementById("button1");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {
    console.log("THE BUTTON HATH BEEN PRESSED!!")
    clickCounter = clickCounter +1;
    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;




