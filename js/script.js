const myButton = document.getElementById("button1");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("char-image");

let clickCounter = 0;

/**
 * 
 * @returns How intriguing, a comment in a place such as this? Hm. Indeed it shall be. God I hate doing comments. No real reason even I just really hate it.
 */
function clickFunction() {
    console.log("THE BUTTON HATH BEEN PRESSED!!")
    clickCounter = clickCounter +1;
// it increments. Nothing more to say.
    if (clickCounter > 3){
        clickCounter = 1;
    }

    myParagraph.innerHTML = "I am on character: " + clickCounter;

    if (clickCounter === 1){
        characterImage.src = "assets/Charmander.png";
        return;
    }
    if (clickCounter === 2){
        characterImage.src = "assets/Squirtle.jpeg";
        return;
    }
    if (clickCounter === 3){
        characterImage.src = "assets/Bulbasaur.png";
        return;
    }
}

myButton.onclick = clickFunction;




