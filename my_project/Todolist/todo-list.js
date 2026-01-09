arr = JSON.parse(localStorage.getItem('save_1')) || [
{ 
  name: 'Quang Đạt',
  date: '2003-04-28'},
{ 
  name: 'Yến Vy',
  date: '2003-11-19'
}];
update_list();
document.querySelector('.js-add').addEventListener('click', () => {
 const data_name = document.querySelector('.js-text'); 
 const name = data_name.value;

 const data_date = document.querySelector('.js-date');
 const date = data_date.value;
 arr.push({
  name,
  date
 });
 data_name.value = '';
 save();
 update_list();
});
function update_list(){
  let todolist = '';
  arr.forEach((object_value) => {
    const name = object_value.name;
    const date = object_value.date;
    let html = `
      <div> ${name} </div>
      <div> ${date} </div>
      <button class="js-delete delete">Delete</button>
      <button class="js-update update">Update</button>
    `    
    todolist += html;
    
  });
  document.querySelector('.js-container-ouput').innerHTML = todolist;
  document.querySelectorAll('.js-delete')
  .forEach((value, index) => {
    value.addEventListener('click', () => {
       arr.splice(index, 1);
       save();
    update_list();
    });   
  });
  document.querySelectorAll('.js-update')
 .forEach((value, index) => {
  value.addEventListener('click', () => {
     const new_name = prompt('edit name', arr[index].name);
     const new_date = prompt('edit date', arr[index].date);

     if(new_name){
      arr[index].name = new_name;
     } else {
      new_name = arr[index].name;
     }
     if(new_date){
      arr[index].date = new_date;
     } else {
      new_date = arr[index].date;
     }
     save();
     update_list();
  });
 })
}
function save(){
  localStorage.setItem(('save_1'), JSON.stringify(arr));
}
  