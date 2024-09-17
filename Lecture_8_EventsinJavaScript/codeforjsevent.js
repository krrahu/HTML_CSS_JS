// inline eventis handled in html itself refer test.html for this
// code for writing the event by using JS  i.e node.evet() by refer test2.html

// our own method by using click mehtod 
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked")
    let a = 25;
    a++;
    console.log(a); //26
}

let div1 = document.querySelector("div");
div1.onmouseover = () => {
    console.log("you are inside div of AWS Test")
}

// event object ( using inbuilt properties or emethod  of click method)
let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log(evt) //
    console.log(evt.type) // o/p click
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}

// event object  [need to check that -->how to solve we have to access muliple div] 
/*let div2 = document.querySelector("div");//querySelectorAll
div2.onmouseover = () => {
    console.log("you are inside div AWS UAT dive")
    console.log(evt) 
    console.log(evt.type) // o/p click
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
}*/

//add  event listeners--> we craete same type of event multiple times
//btn2.addEventListener() --> click is event & e is object we can write anything inplace of e
btn2.addEventListener("click", (e) => {
    console.log("button was clicked handler 2")
    console.log(e)
    console.log(e.type)
})
btn2.addEventListener("click", () => {
    console.log("button was clicked handler 3")
})

// remove  event listeners --> we create same type of event multiple times and we removed it as well
//let btn2 = document.querySelector("#btn2");
//btn2.addEventListener()--> 

btn2.addEventListener("click", () => {
    console.log("button was clicked x")
})
btn2.addEventListener("click", () => {
    console.log("button was clicked y")
})
btn2.addEventListener("click", () => {
    console.log("button was clicked z")
})
btn2.addEventListener("click", () => {
    console.log("button was clicked a")
})
btn2.removeEventListener("click", () => {
    console.log("button was clicked a")
})

/*since in js each time  event it bahave as a seperate funtion so we wants to add any event and 
simlutanesouly want to remove the  same event then use it by defining call back like below */
const hand = () => {
    console.log("button was clicked a")

}
btn2.addEventListener("click", hand)
btn2.removeEventListener("click ", hand)