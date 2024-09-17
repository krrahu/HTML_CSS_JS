/*here we fetching values from html  for id, tag, class, attribute and also manupulating html code of 
our understanding purposes*/
// by id 
let heading = document.getElementById("heading1")
console.dir(heading);
console.log(heading);

// by class
let classtext = document.getElementsByClassName("testclass")
console.dir(classtext);
console.log(classtext);

// by paragraph tag  --> to access only tag name
let para = document.getElementsByTagName("p")
console.log(para);

// query selector by id --> it will return first element --> to access id tag -> #text value 
let firstelement1 = document.querySelector("#heading1")
console.dir(firstelement1);

// query selector all by id --> it will all element in node list formate
let allelement1 = document.querySelectorAll("#heading")
console.dir(allelement1);

// query selector by class --> it will return first element --> to access class tag -> .text value 
let firstelement2 = document.querySelector(".testclass")
console.dir(firstelement2);
// query selector all by class --> it will all element in node list formate
let allelement2 = document.querySelectorAll(".testclass")
console.dir(allelement2);

// query selector by tag --> it will return first element
let firstelement3 = document.querySelector("p")
console.dir(firstelement3);

// query selector all by tag --> it will all element in node list formate
let allelement3 = document.querySelectorAll("p")
console.dir(allelement3);


// DOM manipulation by code 
// by id -
//let first = document.querySelector("#heading")
//console.dir(first);

// by div -
//let div = document.querySelector("div")
//console.dir(div);

// practice question of lecture :6
// question 1:

let p1 = document.querySelector("p")
console.dir(p1.innerText);
p1.innerText = p1.innerText + "from apna college student";
console.dir(p1.innerText);

// question 2: --> to access class tag  of div--> .text value 
let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = "new uqique value 1";
divs[1].innerText = "new uqique value 1";
divs[2].innerText = "new uqique value 1";