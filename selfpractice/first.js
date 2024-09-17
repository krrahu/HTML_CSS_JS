console.log("test");
let marks = [85, 97, 44, 37, 76, 60]
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = sum + element
        //console.log(sum);
}

console.log(sum);
let avg = sum / marks.length;
console.log(avg);