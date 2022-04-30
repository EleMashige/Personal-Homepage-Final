var fruits;


fruits = ['Rock climbing', 'Surfing', 'Going for drives', 'Visit the townshps',];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!fruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }
  });

var expenses, earnings, total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function addTotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total.push(getNumberOrString(document.getElementById('text').value));
  let element_sum = document.getElementById('sum');
  element_sum.innerText = total.reduce((a,b) => a+b, 0);
}


expenses = [];
earnings = [];
total = [];


document.getElementById('add').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) >= '0') {
    earnings.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    new_li.innerText = earnings.slice(-1)[0];

    element_earnings_list.appendChild(new_li);
  } else {
    expenses.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = expenses.slice(-1)[0];

    element_expenses_list.appendChild(new_li2);
  }

});

document.getElementById('total').addEventListener('click', (event) => {
  let element_sum2 = document.getElementById('sum');
  element_sum2.innerText = total.reduce((a,b) => a+b, 0);

});