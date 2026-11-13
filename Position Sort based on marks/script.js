let marks = []
let variable
for (let i = 0; i < 5; i++) {
    variable = parseInt(prompt("Enter Your Marks"));
    marks.push(variable);
}

let sortedArr = marks.sort(function(a,b) {
    return b-a;
})

let first = sortedArr[0];
let second = sortedArr[1];
let third = sortedArr[2];