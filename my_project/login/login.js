document.querySelector('.js-login')
.addEventListener('click', () => handleClick());
const username_login = 'quangdat2804';
const password_login = 'QuangDat123';
function handleClick(){
  const user_name = document.querySelector('.js-account').value;
  const password  = document.querySelector('.js-password').value;
  if(user_name === username_login && password === password_login){
    alert('Bạn đã đăng nhập thành công!');
  }
  if(user_name !== username_login || password !== password_login){
    alert('Sai tài khoản hoặc mật khẩu');
  }
}
document.body.addEventListener('keydown', (event) => {
 if(event.key === 'Enter'){
  handleClick();
 }
});