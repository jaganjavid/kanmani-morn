

const taskInput = document.querySelector("#task");


// Key Down
// taskInput.addEventListener("keydown", runEvent);

// key Up
// taskInput.addEventListener("keyup", runEvent);

// Key press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);

function runEvent(event){

    console.log(`Event Type : ${event.type}`);
    console.log(event.target.value);

}