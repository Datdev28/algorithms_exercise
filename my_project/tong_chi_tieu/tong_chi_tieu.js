arr = JSON.parse(localStorage.getItem('save2')) || [{
  name: 'Máy điều hòa',
  price: '500000'
}]
updateList();
document.querySelector('.js-add')
.addEventListener('click', () => handleClick());

function handleClick (){
  const get_name = document.querySelector('.js-input-name');
  const name = get_name.value;
  const get_price = document.querySelector('.js-input-price');
  const price = get_price.value;
  arr.push({
    name,
    price
  });
  get_name.value = ' ';
 save();
 updateList();
}
function updateList(){
 let expense_list = '';
  arr.forEach((value) => {
     const name =  value.name;
     const price = value.price;
     const HTML = `
       <div> ${name} </div>
       <div> ${price} </div>
       <button class="delete-button js-delete-button">Delete</button>
       <button class="edit-button js-edit-button">Edit</button>
     `
     expense_list += HTML;
  });
document.querySelector('.js-container-ouput').innerHTML = expense_list;
document.querySelectorAll('.js-delete-button')
.forEach((value, index) => {
  value.addEventListener('click', () => {
    arr.splice(index, 1);
    save();
    updateList();
  });
})
document.querySelectorAll('.js-edit-button')
.forEach((value, index) => {
  value.addEventListener('click', () => {
    const new_name = prompt('edit name', arr[index].name);
    const new_price = prompt('edit price', arr[index].price);
    if(new_name){
      arr[index].name = new_name;
    }
    if(new_price){
      arr[index].price = new_price;
    }
    save();
    updateList();
  });
});
}
function save(){
  localStorage.setItem('save2',JSON.stringify(arr));
}
