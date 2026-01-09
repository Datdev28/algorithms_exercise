document.querySelector('.request-button')
.addEventListener('click', () => handleClick());

function handleClick(){
  let hour =  parseInt(document.querySelector('.js-hour').value);
  let minute = parseInt(document.querySelector('.js-minute').value);
  let second = parseInt(document.querySelector('.js-second').value);
  if(!hour){
    hour = 0;
  }
  if(!minute){
    minute = 0;
  }
  if(!second){
    second = 0;
  }
  console.log(hour);
  console.log(minute);
  console.log(second);
  const total_second = hour * 3600 + minute * 60 + second;
  console.log(total_second);
 document.querySelector('.js-ouput').innerHTML = `${total_second}  s`;
}