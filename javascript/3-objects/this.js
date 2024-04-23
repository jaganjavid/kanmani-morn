
// console.log(window);
console.log(this); // window

function getThis(){
    console.log(this); // window
}

getThis();


const x = {
    test:"Hello",
    y:function(){
        console.log(this); // x
        function z(){
            console.log(this) //
        }
        z();
    }
}

x.y();