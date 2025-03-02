// Task 1
document.addEventListener('DOMContentLoaded', () => {

// Select the dashboard container
const dashboardById = document.getElementById('dashboard');
const dashboardBySelector = document.querySelector('#dashboard');
if (dashboardById === dashboardBySelector) {
  console.log('Same element selected');
}

//Create a new div element
const revenueCard = document.createElement('div');

revenueCard.setAttribute('class', 'metric-card');
revenueCard.setAttribute('id', 'revenueCard');

const title = document.createElement('h3');
title.textContent = 'Revenue';

const value = document.createElement('p');
value.textContent = '$0';

revenueCard.appendChild(title);
revenueCard.appendChild(value);

    dashboardById.appendChild(revenueCard);
    console.log('Revenue card added to the dashboard');

});