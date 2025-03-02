document.addEventListener('DOMContentLoaded', () => {

// Select the dashboard container
const createMetricCard = (id, title, value) => {

  const card = document.createElement('div');
  card.setAttribute('class', 'metric-card');
  card.setAttribute('id', id);
  card.style.backgroundColor = 'lightblue';

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;

  const cardValue = document.createElement('p');
  cardValue.textContent = value;

  card.appendChild(cardTitle);
  card.appendChild(cardValue);

  document.getElementById('dashboard').appendChild(card);
};

// Create metric cards
createMetricCard('revenueCard', 'Revenue', '$0');
createMetricCard('profutCard', 'Profit', '$0');
createMetricCard('expenseCard', 'Expenses', '$0');

const addProductItem = () => {
  const inventoryList = document.getElementById('inventoryList');

  // Create new list item
  const newProductItem = document.createElement('li');
  newProductItem.setAttribute('class', 'product-item');
  newProductItem.setAttribute('data-product', 'Product' + (inventoryList.children.length + 1));
  newProductItem.textContent = 'Product' + (inventoryList.children.length + 1);

  inventoryList.appendChild(newProductItem);

  console.log('Product added:', newProductItem.textContent);
};

// Remove clicked item
const removeProductItem = (event) => {
  const itemToRemove = event.target;
  if (itemToRemove && itemToRemove.classList.contains('product-item')) {
    itemToRemove.remove();
    console.log('Product removed:', itemToRemove.textContent);
  }
};

// Add event listeners
const addProductButton = document.getElementById('addProductButton');
addProductButton.addEventListener('click', addProductItem);

const inventoryList = document.getElementById('inventoryList');
inventoryList.addEventListener('click', removeProductItem);

});