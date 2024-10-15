const myButton = document.getElementById("button1");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("char-image");
const characterArray = ["assets/Charmander.png", "assets/Squirtle.jpeg", "assets/Bulbasaur.png"];
const altText = ["Initial Pokemon: Charmander", "Initial Pokemon: Squirtle", "Initial Pokemon: Bulbasaur"];
const paragraphText = ["I am Charmander!", "I am Squirtle!", "I am Bulbasaur!"];

let clickCounter = 0;

/**
 * 
 * @returns How intriguing, a comment in a place such as this? Hm. Indeed it shall be. God I hate doing comments. No real reason even I just really hate it.
 */
function clickFunction() {
    console.log("THE BUTTON HATH BEEN PRESSED!!")
    clickCounter = clickCounter + 1;
    // it increments. Nothing more to say.
    if (clickCounter > 3) {
        clickCounter = 1;
    }

    //    myParagraph.innerHTML = "I am on character: " + clickCounter;

    if (clickCounter === 1) {
        // characterImage.src = "assets/Charmander.png";
        characterImage.src = characterArray[0];
        myParagraph.innerHTML = paragraphText[0];
        characterImage.alt = altText[0];

        return;
    }
    if (clickCounter === 2) {
        // characterImage.src = "assets/Squirtle.jpeg";
        characterImage.src = characterArray[1];
        myParagraph.innerHTML = paragraphText[1];
        characterImage.alt = altText[1];
        return;
    }
    if (clickCounter === 3) {
        // characterImage.src = "assets/Bulbasaur.png";
        characterImage.src = characterArray[2];
        myParagraph.innerHTML = paragraphText[2];
        characterImage.alt = altText[2];
        return;
    }
}

myButton.onclick = clickFunction;




