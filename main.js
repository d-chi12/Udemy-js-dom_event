const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// const hello = function() {
//     alert('hello');
// }
// btn.addEventListener('click', hello);
// btn.addEventListener('mouseenter', hello);
// btn.removeEventListener('click', hello);

// function hello() {
function changeColor() {
    // this.style.color = 'red';
    // console.log(this);
    h1.style.color = 'red';
};
function changeBgColor() {
    h1.style.backgroundColor = 'green';
};

// btn.addEventListener('click', hello);
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);
