document.querySelector('.count-word')
.addEventListener('click', () => handleClick());
function handleClick(){
  const text = document.querySelector('.message').value;
  const word = text.trim().split(/\s+/).length;
  document.querySelector('.js-ouput')
 .innerHTML = `tổng số từ là: ${word} `;
}