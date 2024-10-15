// declaring stuff
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


/**
 * 
 * @returns How intriguing, a comment in a place such as this? Hm. Indeed it shall be. God I hate doing comments. No real reason even I just really hate it.
 */
function clickFunction() {
    console.log("THE BUTTON HATH BEEN PRESSED!!")
    clickCounter = clickCounter + 1;
    // it increments. Nothing more to say.
    if (clickCounter > 2) {
        clickCounter = 0;
    }
    characterImage.src = characterArray[clickCounter];
    myParagraph.innerHTML = paragraphText[clickCounter];
    // myParagraph.innerHTML = customName.value;
    characterImage.alt = altText[clickCounter];
    return;


    // if (clickCounter === 1) {
    //     characterImage.src = characterArray[clickCounter];
    //     myParagraph.innerHTML = paragraphText[clickCounter];
    //     characterImage.alt = altText[clickCounter];

    //     return;
    // }
    // if (clickCounter === 2) {
    //     characterImage.src = characterArray[1];
    //     myParagraph.innerHTML = paragraphText[1];
    //     characterImage.alt = altText[1];
    //     return;
    // }
    // if (clickCounter === 3) {
    //     characterImage.src = characterArray[2];
    //     myParagraph.innerHTML = paragraphText[2];
    //     characterImage.alt = altText[2];
    //     return;
    // }
    }

myButton.onclick = clickFunction;
customNameButton.onclick = onSubmitButton;