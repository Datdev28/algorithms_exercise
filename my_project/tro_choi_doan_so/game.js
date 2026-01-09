
let count = 0;
let is_active = false;
let computer_result = computerMove();

document.querySelector('.js-guess-button')
.addEventListener('click', () => handleClick());
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    handleClick();
  }
})



function handleClick(){
 const guess = parseInt(document.querySelector('.js-number-input').value);
 console.log(guess);
 console.log(computer_result);
 const times = document.querySelector('.js-time');
 const result = document.querySelector('.js-result');
 if(guess < computer_result){
   count ++;
   times.innerHTML  = `Số lần đoán ${count}`;
   result.innerHTML = `Số bạn đoán nhỏ hơn`;
 } else if (guess > computer_result){
   count ++;
   times.innerHTML  = `Số lần đoán ${count}`;
   result.innerHTML = `Số bạn đoán lớn hơn`;
 } else if (guess === computer_result){
   count ++;
   times.innerHTML  = `Số lần đoán ${count}`;
   result.innerHTML = `Bạn đã đoán đúng!
   <button class="continue js-continue"> Chơi tiếp </button>`; 
   document.querySelector('.js-continue').addEventListener('click', () => {
     count = 0; 
     computer_result = computerMove();
    document.querySelector('.js-continue').remove();
    times.innerHTML = ``;
    result.innerHTML = ``;
  });
 }
}
function computerMove(){
 const randomNumber = Math.floor(Math.random() * 100) + 1;
 return randomNumber;
}