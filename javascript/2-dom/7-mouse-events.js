


const cleatBtn = document.querySelector(".clear-tasks");

// Mouse Event

// Click
// cleatBtn.addEventListener("click", runEvent);

// Double Click
// cleatBtn.addEventListener("dblclick", runEvent);

// Mouse Down
// cleatBtn.addEventListener("mousedown", runEvent);

// Mouse Up
// cleatBtn.addEventListener("mouseup", runEvent);

// Mouse Enter
// cleatBtn.addEventListener("mouseenter", runEvent);

// Mouse Leave
cleatBtn.addEventListener("mouseleave", runEvent);


function runEvent(event){
    console.log(`Event Type : ${event.type}`);
}