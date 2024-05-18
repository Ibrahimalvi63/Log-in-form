const email = document.querySelector('.email');
const password = document.querySelector('#password');
const passwordBox = document.querySelector('.password-box');
let icon = document.querySelector('i');
const popup = document.querySelector('.popup');
const loading = document.querySelector('.loading');
const body = document.querySelector('body');
const submitButton = document.querySelector('#Submit-btn');



function openPopup() {
  popup.classList.add('open-popup');
}


function closePopup() {
  popup.classList.remove('open-popup');
  loading.classList.add('visible');
  container.classList.add('blur');
}








submitButton.addEventListener('click', ()=>{

if (email.value.length > 0) {
  if (password.value.length > 0) {
    openPopup();
    submitButton.addEventListener('click',()=>{
      alert('your data is already submitted');
      popup.classList.remove('open-popup');
    })
  } else {
    passwordBox.classList.add('eror');
    setTimeout(()=>{
    passwordBox.classList.remove('eror');
  }, 1000)
  }
} else {
  email.classList.add('eror');
  setTimeout(()=>{
    email.classList.remove('eror');
  }, 1000)
}
  
  
});


icon.addEventListener('click', ()=>{
  
 if (password.type == 'password') {
   password.type = 'text';
   icon.classList.remove('fa-eye-slash');
   icon.classList.add('fa-eye');
 } else {
   password.type = 'password';
   icon.classList.add('fa-eye-slash');
   icon.classList.remove('fa-eye');
 }
 
 
});




