document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#register-form-submit').addEventListener('click', register);
    studentForm(false);
});

function cleanErrors(){
    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });
}

function register(){
    let valid = true;
    let user = {};

    cleanErrors();
    document.querySelectorAll('.register').forEach( input =>{
        const name = input.getAttribute('name');
        const regex = new RegExp(input.getAttribute('data-pattern'));
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

    user["role"] = getRol();
    user["language"] = getLanguage();
    if(valid) {
        if(getUser(user.email) === null){
            document.querySelector('#register-form').reset();
            addUser(user);
            showSection('login');
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
