

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Im CLICKED");
// });


document.querySelector(".clear-tasks").addEventListener("click", onClick);
let count = 0;
document.querySelector("#task-title").innerText = count;

function onClick(event){

    count = count + 1;

    document.querySelector("#task-title").innerText = count;

    // document.querySelector("body").classList.add("change-color");
    document.querySelector("body").classList.toggle("change-color");

    console.log(count);

}