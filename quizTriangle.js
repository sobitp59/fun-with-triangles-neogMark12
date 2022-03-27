const quizForm = document.querySelector('#quiz-form');
const formSubmitBtn = document.querySelector('#submit-btn');
const quizScoreOutput = document.querySelector('#quiz-score');

let correctAnswer = ['90°','right angle','equilateral', '2cm', 'trigonometry'];

formSubmitBtn.addEventListener('click', calculateQuizScore);

function calculateQuizScore(){
   let score = 0, index = 0;
   let formData = new FormData(quizForm);
   for(let value of formData.values()){
       if(value === correctAnswer[index]){
           score = score + 1;
       }
       index = index + 1;
   }
   quizScoreOutput.textContent = `Your score is ${score}`;    
}
