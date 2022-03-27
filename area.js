const heightOfTriangle = document.querySelector('#height');
const baseOfTriangle = document.querySelector('#base');
const calculateBtn = document.querySelector('#calculate-btn');
const resultOutput = document.querySelector('#result-output');

calculateBtn.addEventListener('click', calculateArea);

function calculateArea(){
    const height = parseInt(heightOfTriangle.value);
    const base = parseInt(baseOfTriangle.value);
    const area = 1/2*(base*height);

    if(heightOfTriangle.value === '' || baseOfTriangle.value === ''){
        resultOutput.textContent = 'you need to enter both the fields'
    }else{
        resultOutput.textContent = `area of triangle is ${area.toFixed(2)}cm²`;
    }
}