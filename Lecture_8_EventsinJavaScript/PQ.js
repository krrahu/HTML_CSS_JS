// Practice Question 
let modeBtn = document.querySelector("#mode")
let Currmode = "Light" //Dark
let body = document.querySelector("body")

modeBtn.addEventListener("click", () => {
    if (Currmode === "Light") {
        Currmode = "dark";
        body.classList.add("dark-c")
        body.classList.remove("Light-c")
            //document.querySelector("body").style.backgroundColor = "red"; // inline css bad practice use css style sheet

    } else {
        Currmode = "Light";
        body.classList.add("Light-c")
        body.classList.remove("dark-c")
            //document.querySelector("body").style.backgroundColor = "green";// inline css bad practice use css style sheet
    }
    console.log(Currmode)

})