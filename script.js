const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const confirmPassword = document.getElementById('password-confirm');

function showError(input,message){
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
}

function showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
}

function showFieldName(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkSize(input,min,max){
        if(input.value.length < min){
                showError(input,`${showFieldName(input)} is lower than ${min} characters`)
        } else if(input.value.length > max){
                showError(input,`${showFieldName(input)} is bigger than ${max} characters`)     
        } else{
                showSuccess(email);
        }
}
function checkEmpty(Array){
        Array.forEach(function (input){
                if( input.value === ""){
                        showError(input,`${showFieldName(input)} is empty`);
                } else{
                        showSuccess(input);
                }
        });
}

function checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email.value)){
                showError(email,"Invalid email")
        } else{
                showSuccess(email);
        }
}

function checkIqual(pass1,pass2){
        if(pass1.value !== pass2.value){
                showError(confirmPassword,"The passwords are diferents")
        } else{
                showSuccess(confirmPassword);
        }
}

document.addEventListener('submit', function(e){
        e.preventDefault();
        checkEmpty([username,password,email,confirmPassword]);
        checkEmail(email);
        checkSize(username,5,12);
        checkSize(password,8,16);
        checkIqual(password,confirmPassword);

})