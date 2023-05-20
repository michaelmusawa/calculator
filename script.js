let add = (first_numb, second_numb) => first_numb + second_numb;
let subtract = (first_numb, second_numb) => first_numb - second_numb;
let multiply = (first_numb, second_numb) => first_numb * second_numb;
let divide = (first_numb, second_numb) => first_numb / second_numb;

let display = '';
let first_numb;
let second_numb;

function displayKeyPress (key) {
    
    const calculations = document.querySelector('#calculations');
    display += key;
    calculations.innerText = display;

}



const btn_1 = document.querySelector('#btn_1')
btn_1.addEventListener('click', () => {
    let key = 1;
    displayKeyPress(key); 
});

const btn_2 = document.querySelector('#btn_2')
btn_2.addEventListener('click', () => {
    let key = 2;
    displayKeyPress(key);  
});

const btn_3 = document.querySelector('#btn_3')
btn_3.addEventListener('click', () => {
    let key = 3;
    displayKeyPress(key);  
});
const btn_4 = document.querySelector('#btn_4')
btn_4.addEventListener('click', () => {
    let key = 4;
    displayKeyPress(key);  
});
const btn_5 = document.querySelector('#btn_5')
btn_5.addEventListener('click', () => {
    let key = 5;
    displayKeyPress(key);  
});
const btn_6 = document.querySelector('#btn_6')
btn_6.addEventListener('click', () => {
    let key = 6;
    displayKeyPress(key);  
});
const btn_7 = document.querySelector('#btn_7')
btn_7.addEventListener('click', () => {
    let key = 7;
    displayKeyPress(key); 
});
const btn_8 = document.querySelector('#btn_8')
btn_8.addEventListener('click', () => {
    let key = 8;
    displayKeyPress(key);  
});
const btn_9 = document.querySelector('#btn_9')
btn_9.addEventListener('click', () => {
    let key = 9;
    displayKeyPress(key);  
});
const btn_0 = document.querySelector('#btn_0')
btn_0.addEventListener('click', () => {
    let key = 0;
    displayKeyPress(key);  
});
const btn_period = document.querySelector('#btn_period')
btn_period.addEventListener('click', () => {
    let key = '.';
    displayKeyPress(key); 
});
const btn_plus = document.querySelector('#btn_plus')
btn_plus.addEventListener('click', () => {
    let key = '+';
    displayKeyPress(key);  
});
const btn_divide = document.querySelector('#btn_divide')
btn_divide.addEventListener('click', () => {
    let key = '/';
    displayKeyPress(key); 
});
const btn_equals = document.querySelector('#btn_equals')
btn_equals.addEventListener('click', () => {
    let key = '=';
    displayKeyPress(key); 
});

const btn_times = document.querySelector('#btn_times')
btn_times.addEventListener('click', () => {
    let key = 'X';
    displayKeyPress(key); 
});





