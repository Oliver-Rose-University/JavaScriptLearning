const myButton = document.getElementById("button1");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("char-image");
const characterArray = [ "assets/Bulbasaur.png", "assets/Charmander.png", "assets/Squirtle.jpeg"];
const altText = ["Initial Pokemon: Bulbasaur", "Initial Pokemon: Charmander", "Initial Pokemon: Squirtle"];
const paragraphText = ["I am Bulbasaur!", "I am Charmander!", "I am Squirtle!"];
const customName = document.getElementById("input1");
const customNameButton = document.getElementById("input-button");
let clickCounter = 0;
function onSubmitButton(){
    myParagraph.innerHTML = customName.value;
}
function clickFunction() {
    console.log("THE BUTTON HATH BEEN PRESSED!!")
    clickCounter = clickCounter + 1;
    if (clickCounter > 2) {
        clickCounter = 0;
    }
    characterImage.src = characterArray[clickCounter];
    myParagraph.innerHTML = paragraphText[clickCounter];
    characterImage.alt = altText[clickCounter];
    return;
    }
myButton.onclick = clickFunction;
customNameButton.onclick = onSubmitButton;
// CODE DOCUMENTATION: https://nua-my.sharepoint.com/:w:/r/personal/oliver_rose_student_norwichuni_ac_uk/Documents/Code%20Documentation%201.docx?d=w09777bde6989425ea6c66b3bf5ac7708&csf=1&web=1&e=ftoxIr