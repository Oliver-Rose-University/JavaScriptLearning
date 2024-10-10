const myButton = document.getElementById("button1");
const myParagraph = document.getElementById("my-paragraph");

myButton.onclick = clickFunction;

function clickFunction() {
    myParagraph.innerHTML = "Womp Womp";
}

