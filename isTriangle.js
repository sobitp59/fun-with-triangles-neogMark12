const inputAngles = document.querySelectorAll('.angles');
const TriAnglesBtn = document.querySelector('#isTriangleBtn');
const TriAnglesOutput = document.querySelector('#result-output');



TriAnglesBtn.addEventListener('click', function(){
          isTriangle(inputAngles);
});


function isTriangle(sumOfAngles){
    if(sumOfAngles[0].value === "" || sumOfAngles[1].value === "" || sumOfAngles[2].value === ""){
        TriAnglesOutput.textContent = 'please enter all the angles 🙂';
    }else if(sumOfAngles[0].value <= 0 || sumOfAngles[1].value <= 0  || sumOfAngles[2].value <= 0){     
        TriAnglesOutput.textContent = 'angles cannot be zero or negative 😏';
    }else if(calculateSumOfTriangles(sumOfAngles) === 180){
        TriAnglesOutput.textContent = 'bingo! it is a triangle 🚀'
    }else{
        TriAnglesOutput.textContent = 'does not form any triangle 🙃'
    }
}

function calculateSumOfTriangles(angles){
    let sum = 0;
    for(let i = 0; i < angles.length; i++){
        sum = sum + parseInt(angles[i].value);
    }
    return sum;
} 
