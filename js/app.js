'use strict';

let allMerch = [];
let clicks = 0;
let clicksAllowed = 25;

let container = document.querySelector('section');
let results = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:last-child');



function merch(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allMerch.push(this);
}

new merch('bag');
new merch('banana');
new merch('bathroom');
new merch('boots');
new merch('breakfast');
new merch('bubblegum');
new merch('chair');
new merch('cthulhu');
new merch('dog-duck');
new merch('dragon');
new merch('pen');
new merch('pet-sweep');
new merch('scissors');
new merch('shark');
new merch('tauntaun');
new merch('unicorn');
new merch('water-can');
new merch('wine-glass');
new merch('sweep', 'png');

function selectRandomMerchIndex() {
  return Math.floor(Math.random() * allMerch.length);
}

function renderRandomMerch() {
  let itemOne = selectRandomMerchIndex();
  let itemTwo = selectRandomMerchIndex();
  let itemThree = selectRandomMerchIndex();

  while (itemOne === itemTwo || itemThree === itemTwo) 
    itemTwo = selectRandomMerchIndex();
  
  while (itemThree === itemOne || itemTwo === itemOne) 
      itemOne = selectRandomMerchIndex();
  
  while (itemTwo === itemThree || itemOne === itemThree) 
        itemThree = selectRandomMerchIndex();
  

  imageOne.src = allMerch[itemOne].src;
  imageOne.alt = allMerch[itemOne].name;
  allMerch[itemOne].views++;

  imageTwo.src = allMerch[itemTwo].src;
  imageTwo.alt = allMerch[itemTwo].name;
  allMerch[itemTwo].views++;

  imageThree.src = allMerch[itemThree].src;
  imageThree.alt = allMerch[itemThree].name;
  allMerch[itemThree].views++;
}

renderRandomMerch();

function handleSurveyClick(event) {
  if (event.target === container) {
    alert('Please select one of the listed MERCHANDISE');
  }

  clicks++;
  let clickedItem = event.target.alt;
  for (let i = 0; i < allMerch.length; i++){
    if (clickedItem === allMerch[i].name) {
      allMerch[i].clicks++;
    }
  }
  renderRandomMerch();

  if (clicks === clicksAllowed) {
    container.removeEventListener('click', handleSurveyClick);
  }
}

function renderResults(){
  let ul = document.querySelector('ul');
  for (let i = 0; i < allMerch.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allMerch[i].name} had ${allMerch[i].views} views and was clicked ${allMerch[i].clicks} times.`;
    ul.appendChild(li);
  }
}

function handleResultsClick(event) {
  if (clicks === clicksAllowed){
    renderResults();
  }
}
renderRandomMerch();

container.addEventListener('click', handleSurveyClick);
results.addEventListener('click', handleResultsClick);
