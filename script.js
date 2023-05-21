let add = (number_1st,number_2nd) => number_1st + number_2nd;
let subtract = (number_1st,number_2nd) => number_1st - number_2nd;
let multiply = (number_1st,number_2nd) => number_1st * number_2nd;
let divide = (number_1st,number_2nd) => number_1st / number_2nd;


let first_numb = '';
let second_numb = '';
let operator = '';
let display = '';


function displayKeyPress(key) {
  const calculations = document.querySelector('#calculations');
  display += key;
  calculations.innerText = display;
}

function getKeys(key) {
    var key_array = [];
    console.log (key);
  

  if (key === '+' || key === '-' || key === '*' || key === '/' || key === 'X') {
    operator += key;
    
  } else {
    if (operator === '') {
      first_numb += key;
    } else {
      second_numb += key;
    }
  }
  key_array.push(operator);
  key_array.push(first_numb);
  key_array.push(second_numb);

  console.log(key_array);
  return key_array;
}


function doOperation(key_array) {
    let op = key_array[0];
    let number_1st = key_array[1];
    let number_2nd = key_array[2];
    let results = 0;
  
    if (op === '+') {
      results = add(parseFloat(number_1st), parseFloat(number_2nd));
    } else if (op === '-') {
      results = subtract(parseFloat(number_1st), parseFloat(number_2nd));
    } else if (op === '*') {
      results = multiply(parseFloat(number_1st), parseFloat(number_2nd));
    } else if (op === '/') {
      results = divide(parseFloat(number_1st), parseFloat(number_2nd));
    }
  
    console.log(results);
    Calculations(results);
  }

function Calculations(results){
    const result = document.querySelector('#result')
    result.innerText = `${results}`

}

const btn_1 = document.querySelector('#btn_1')
btn_1.addEventListener('click', () => {
    let key = 1;
    getKeys(key);
    displayKeyPress(key); 
});

const btn_2 = document.querySelector('#btn_2')
btn_2.addEventListener('click', () => {
    let key = 2;
    getKeys(key);
    displayKeyPress(key);  
});

const btn_3 = document.querySelector('#btn_3')
btn_3.addEventListener('click', () => {
    let key = 3;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_4 = document.querySelector('#btn_4')
btn_4.addEventListener('click', () => {
    let key = 4;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_5 = document.querySelector('#btn_5')
btn_5.addEventListener('click', () => {
    let key = 5;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_6 = document.querySelector('#btn_6')
btn_6.addEventListener('click', () => {
    let key = 6;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_7 = document.querySelector('#btn_7')
btn_7.addEventListener('click', () => {
    let key = 7;
    getKeys(key);
    displayKeyPress(key); 
});
const btn_8 = document.querySelector('#btn_8')
btn_8.addEventListener('click', () => {
    let key = 8;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_9 = document.querySelector('#btn_9')
btn_9.addEventListener('click', () => {
    let key = 9;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_0 = document.querySelector('#btn_0')
btn_0.addEventListener('click', () => {
    let key = 0;
    getKeys(key);
    displayKeyPress(key);  
});
const btn_period = document.querySelector('#btn_period')
btn_period.addEventListener('click', () => {
    let key = '.';
    getKeys(key);
    displayKeyPress(key); 
});
const btn_plus = document.querySelector('#btn_plus')
btn_plus.addEventListener('click', () => {
    let key = '+';
    getKeys(key);
    displayKeyPress(key);  
});
const btn_divide = document.querySelector('#btn_divide')
btn_divide.addEventListener('click', () => {
    let key = '/';
    getKeys(key);
    displayKeyPress(key); 
});
const btn_equals = document.querySelector('#btn_equals')
btn_equals.addEventListener('click', () => {
    let key = '=';
    let key_array = getKeys(key);
    doOperation(key_array);
});

const btn_times = document.querySelector('#btn_times')
btn_times.addEventListener('click', () => {
    let key = '*';
    getKeys(key);
    displayKeyPress(key); 
});

const btn_minus = document.querySelector('#btn_minus')
btn_minus.addEventListener('click', () => {
    let key = '-';
    getKeys(key);
    displayKeyPress(key); 
});





