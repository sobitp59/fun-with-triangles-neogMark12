const sideOne = document.querySelector('#sideOne');
const sideTwo = document.querySelector('#sideTwo');
const calculateBtn = document.querySelector('#calculate-btn');
const resultOutput = document.querySelector('#result-output');

calculateBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    const sideA = parseInt(sideOne.value);
    const sideB = parseInt(sideTwo.value);
    const squareRoot = Math.sqrt((sideA*sideA) + (sideB*sideB));
    if(sideOne.value === '' || sideTwo.value === ''){
        resultOutput.textContent = `Please enter both the fields`;
    }else{
        resultOutput.textContent = `The length of hypotenuse is ${squareRoot.toFixed(2)}cm`;
    }
}