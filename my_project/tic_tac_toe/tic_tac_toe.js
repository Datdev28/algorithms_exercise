arr = [
  [null, null, null], 
  [null, null, null],
  [null, null, null]
];

let is_active = true;

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    handleClick(event);
  });
});

let count_x =  0;
let count_o =  0;

let score_x = localStorage.getItem('score_x') || 0;
let score_o = localStorage.getItem('score_o') || 0;
document.querySelector('.js-score').innerHTML = `Player X <span style="color:red">${score_x}:${score_o}</span> Player O`;
document.querySelector('.js-reset').addEventListener('click', () => {
  arr = [
    [null, null, null], 
    [null, null, null],
    [null, null, null]
  ]
  update_chess();
  is_active = true;
  count_x = 0;
  count_o = 0;
})


function handleClick(event){
  if(is_active){
    const row = parseInt(event.target.getAttribute('data-row'));
    const col = parseInt(event.target.getAttribute('data-col'));
    
    if(arr[row][col] === null){
      if(count_x > count_o){
        arr[row][col] = 'O';
        count_o++;
        update_chess();
        result();
      } else if(count_x <= count_o){
        arr[row][col] = 'X';
        count_x++;
        update_chess();
        result();
      }
    }
  }
}

function update_chess(){
  const board_element = document.getElementById('board');
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
     const cell = board_element.querySelector(`[data-row = "${i}"][data-col = "${j}"]`);
     const value = arr[i][j];
     cell.innerHTML = value || '';
    }
  }
}

function result() {
  count_result = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i][i] === null) continue;
    if (arr[i][i] === arr[0][0]) {
      count_result++;
      if (count_result === 3) {
        if(arr[i][i] === 'X'){
          score_x++;
          save_score();
        } else if(arr[i][i] === 'O'){
          score_o++;
          save_score();
        }
        alert(`Người chơi ${arr[i][i]} win!`);
        document.querySelector('.js-score').innerHTML = `Player X <span style="color:red">${score_x}:${score_o}</span> Player O`;
        is_active = false;
        return;
      }
    }
  }
}

function save_score(){
  localStorage.setItem('score_o', score_o);
  localStorage.setItem('score_x', score_x);
}
