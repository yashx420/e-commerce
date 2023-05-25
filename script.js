"use strict";
"use strict";
const x = function(){
  console.log(document.querySelector('.search-bar') .value);
}

const openMenu = function(){
  var change = document.querySelector('.filterTab');
  var productz = document.querySelector('.products');
  change.style.opacity = "1";
  change.style.left = "0";
  productz.style.left = "20px";
}


document.querySelector('.search-button') .addEventListener('click', x);
document.querySelector('.menu-button') .addEventListener('click', openMenu);



