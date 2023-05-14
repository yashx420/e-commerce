"use strict";

/*
let country = "India";
let population = 1.425;
let continent = "Asia";
let isIsland = false;

console.log(typeof country);
console.log(typeof population);
console.log(typeof continent);
console.log(typeof isIsland);

let mWeight = 78;
let mHeight = 1.69;
let jWeight = 95;
let jHeight = 1.88;

let mBMI = mWeight / (mHeight ** 2);
let jBMI = jWeight / (jHeight ** 2);

let markHigherBMI = mBMI > jBMI;
console.log(markHigherBMI);


let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

if (dolphins > koalas) {
    console.log("Dolphins win");
} else if (dolphins < koalas) {
    console.log("Koalas win");
} else {
    console.log("Tie!");
}


const years = [2003, 2004, 2005, 2006];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2023 - years[i];
  console.log(ages[i]);
}

let ask = alert("Shopping Website");
console.log(ask);
*/

function total(bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  console.log(tip);
}

total(283);
