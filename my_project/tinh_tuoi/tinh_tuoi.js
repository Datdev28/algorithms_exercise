document.querySelector('.js-calculateAge-button')
.addEventListener('click', () => {
  handleClick();
})
function handleClick(){
  let get_data = document.querySelector('.js-date-input').value;
  let dob = new Date(get_data);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let month = today.getMonth() - dob.getMonth();
  let date = today.getDate() - dob.getDate();
  console.log(month);
  console.log(date);
  if(month < 0){
    age--;
    if(age < 0){
      age = 0;
    }
  }
  if(month === 0){
    if(date < 0){
      age--;
      if(age < 0){
        age = 0;
      }
    }
  }
  document.querySelector('.your-age').innerHTML = `${age}`;
}