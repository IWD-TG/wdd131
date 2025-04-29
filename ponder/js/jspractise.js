// var vs constant
const PI = 3.14;
let radius = 3;

let area;

area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);
// type cohersion
const one = 1;
const two = '2';

let saddness = one * two;
console.log(saddness);

saddness = one + two;
console.log(saddness);

saddness = one + parseInt(two);
console.log(saddness);

saddness = one + Number(two);
console.log(saddness);

//scope / global vars

let global = "I'm global";

function exampleFunction(){
    let local = "I'm block level or local";
    console.log(local);
    console.log(global);
};

exampleFunction();
//console.log(local);
console.log(global);

hmmmm = "is a new var without let I guess...";
console.log(hmmmm)