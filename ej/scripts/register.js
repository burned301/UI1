document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-submit').addEventListener('click', register);
    studentForm(false);
});

//pattern="(\d){9}" oninvalid="setCustomValidity('Introduzca los 9 dígitos de su NIA')"


function register(){
    let valid = true;
    let user = {};
    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });

    document.querySelectorAll('input').forEach( input =>{
        const name = input.getAttribute('name');
        const regex = new RegExp(input.getAttribute('data-pattern'));
        console.log(input.value);
        if(!regex.test(input.value)){
            valid = false;
            document.querySelector(`#${name}-error`).innerHTML = input.getAttribute('data-error') ;
        }
        user[`${name}`] = `${input.value}`;
    });

    const checked = document.querySelector('#terms');
    if(!checked.checked){
        valid = false;
        document.querySelector(`#terms-error`).innerHTML = checked.getAttribute('data-error')
    }

    user["rol"] = getRol();
    user["language"] = getLanguage();
    if(valid) {
        if(getUser(user.email) === null){
            addUser(user);
        }else {
            document.querySelector("#email-error").innerHTML = "Email ya en uso, por favor introduzca una nuevo";
        }
    }
    return false;
}

function getRol(){
    return getSelect("#rol");
}

function getLanguage(){
    return getSelect("#language");
}

function getSelect(query){
    const e = document.querySelector(query);
    return e.options[e.selectedIndex].value;
}

function isStudent(){
    studentForm(getRol() === "Estudiante");
}

function studentForm(isStudent){
    const studentForm = document.querySelector('#student');
    if(isStudent){
        studentForm.style.display = 'block';
    }else {
        studentForm.style.display = 'none';
    }

}