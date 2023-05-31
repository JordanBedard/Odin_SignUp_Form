let password = document.getElementById('user_password');
let password1 = document.getElementById('confirm_password');
let message = document.querySelector('.passwordMatch');

if (password.value === password1.value && password.value !== "") {
    password.style.borderColor = 'green';
    password1.style.borderColor = 'green';
    message.hidden = true;
} else {
    password.style.borderColor = 'red';
    password1.style.borderColor = 'red';
    message.hidden = false;
}

