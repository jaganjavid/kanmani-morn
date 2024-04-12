

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where the event actually happened and handle it.

const ul = document.querySelector(".collection");


ul.addEventListener("click", deleteItem);

function deleteItem(e){

    // console.log(e.target.parentElement.className);

    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //    if(confirm("Are you sure ?")){
    //      e.target.parentElement.parentElement.remove();
    //    }
    // }

    const deleteClass = e.target.parentElement.classList.contains("delete-item");

    if(!deleteClass){
        return false;
    }

    if(confirm("Are you sure ?")){
        e.target.parentElement.parentElement.remove();
    }

    

}
