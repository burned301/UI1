document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-submit').addEventListener('click', register);
    studentForm(false);
});

//pattern="(\d){9}" oninvalid="setCustomValidity('Introduzca los 9 dígitos de su NIA')"

function register(){
    const valid = true;
    let cookie = '{';
    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });

    document.querySelectorAll('input').forEach( input =>{
        const name = input.getAttribute('name');
        cookie += `${name}:${input.value},`;
        if(!input.checkValidity()) {
            document.querySelector(`#${name}-error`).innerHTML = input.validationMessage;
        }

    })
    cookie += `rol:${getRol()},`
    cookie += `language:${getLanguage()}}`
    //if(valid) setCookie(JSON.parse(cookie),1);
    return false;
}

function setCookie(cookie, exdays) {
    alert(cookie);
    alert(JSON.stringify(cookie));
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "mycookie="+JSON.stringify(cookie) +";"+ expires + ";path=/";
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