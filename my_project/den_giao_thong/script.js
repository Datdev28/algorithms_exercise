document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    light_red();
  }
})
function light_red(){
  let count_red = 0;
  let count_second_red = 10;
  const intervalId_red = setInterval(function (){
      const lightRed = document.querySelector('.js-leg-red');
      const lightRed_second = document.querySelector('.js-second-red');
       lightRed.classList.add('on-red');
       count_red++;
       count_second_red--;
       lightRed_second.innerHTML=`${count_second_red}`;
       if(count_red === 10){
        lightRed.classList.remove('on-red');
        clearInterval(intervalId_red);
        light_green();
       }
      }, 1000);
}

function light_yellow(){
  let count_yellow = 0;
  let count_second_yellow = 3;
    const intervalId_yellow = setInterval(function (){
      const lightYellow = document.querySelector('.js-leg-yellow');
      const light_yellow_second = document.querySelector('.js-second-yellow');
      lightYellow.classList.add('on-yellow');
      count_second_yellow--;
      light_yellow_second.innerHTML = `${count_second_yellow}`;
      count_yellow++;
      if(count_yellow === 3){
        lightYellow.classList.remove('on-yellow');
        clearInterval(intervalId_yellow);
        light_red();
      }
  }, 1000);
}

function light_green(){
  let count_green = 0;
  let count_second_green = 10;
    const intervalId_green = setInterval(function (){
      const lightgreen = document.querySelector('.js-leg-green');
      const light_green_second = document.querySelector('.js-second-green');
      lightgreen.classList.add('on-green');
      count_second_green--;
      light_green_second.innerHTML = `${count_second_green}`;
      count_green++;
      if(count_green === 10){
        lightgreen.classList.remove('on-green');
        clearInterval(intervalId_green);
        light_yellow();
      }
  }, 1000);
}