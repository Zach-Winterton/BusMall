'use strict';

let allMerch = [];
let clicks = 0;
let clicksAllowed = 25;

let container = document.querySelector('section');
let results = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:last-child');

let images = [];


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

  while (images.length < 6) {
    let index = selectRandomMerchIndex();
    if (!images.includes(index)) {
      images.unshift(index);
    }
  }
  //console.log(images);
  let itemOne = images.pop();
  let itemTwo = images.pop();
  let itemThree = images.pop();

  //let itemOne = selectRandomMerchIndex();
  //let itemTwo = selectRandomMerchIndex();
  //let itemThree = selectRandomMerchIndex();

 // while (itemOne === itemTwo) (itemTwo === itemThree) || (itemThree === itemOne);
  //{
   // itemTwo = selectRandomMerchIndex();
   // itemThree = selectRandomMerchIndex();
  //}
  
  
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
    jsChart();
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
function jsChart() {
  let productName = [];
  let voteTotals = [];
  let clickTotals = [];
  
  for (let i = 0; i < allMerch.length; i++) {
    productName.push(allMerch[i].name);
    voteTotals.push(allMerch[i].views);
    clickTotals.push(allMerch[i].clicks);
  }
  
  let ctx = document.getElementById('myChart').getContext('2d');
  let chartJs = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: 'Click Totals',
        data: clickTotals,
        backgroundColor: 'rgba(255,140,0)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        fontSize: 40,
        fontStyle: "bold",
        padding: 15,
        fontColor: 'rgba(0,0,0)',
      },
      {
        label: 'Vote Totals',
        data: voteTotals,
        backgroundColor: 'rgba(0,128,128)',
        borderColor: 'rgba(0,128,128)',
        borderWidth: 1,
        fontSize: 40, 
        fontStyle: "bold",
        padding: 15,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, chartJs);
}

container.addEventListener('click', handleSurveyClick);

//itemTwo = selectRandomMerchIndex();

//while (itemThree === itemOne || itemTwo === itemOne) 
//itemOne = selectRandomMerchIndex();

//while (itemTwo === itemThree || itemOne === itemThree) 
//itemThree = selectRandomMerchIndex();

//function handleResultsClick(event) {
  //if (clicks === clicksAllowed){
   // renderResults();
  //}
 // results.removeEventListener('click', handleResultsClick);
//results.addEventListener('click', handleResultsClick);
//renderRandomMerch();
//}
