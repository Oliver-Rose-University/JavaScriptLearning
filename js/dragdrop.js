const accessories = document.getElementsByClassName("accessory");
const dropZone = document.getElementById("imageZone");

function onDrop(event) {
    //bring fancyGlasses to these positions
    accessories.style.left = event.clientX - offsetX + "px";
    accessories.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}


let offsetX = 0;
let offsetY = 0;

function onDragStart(event) {

    const style = window.getComputedStyle(accessory, null);

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
    console.log("I'm being Dragged");
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

for(let accessory of accessories){
    accessory.ondragstart = onDragStart;
}