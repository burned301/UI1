document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-submit').addEventListener('click', register);
    studentForm(false);
});

//pattern="(100)(\d){6}"

function register(){
    const valid = true;
    let cookie = '';
    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });

    document.querySelectorAll('input').forEach( input =>{
        const name = input.getAttribute('name');
        cookie += `${name}=${input.value};`;
        if(!input.checkValidity()) {
            document.querySelector(`#${name}-error`).innerHTML = input.validationMessage;
        }
    })

    if(valid) setCookie(cookie,1);
    return false;
}

function setCookie(cookie, exdays) {
    alert(cookie);
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookie + expires + ";path=/";
}


function isStudent(){
    const e = document.querySelector("#rol");
    const isStudent = e.options[e.selectedIndex].value;
    studentForm(isStudent === "Estudiante");
}



function studentForm(isStudent){
    const studentForm = document.querySelector('#student');
    if(isStudent){
        studentForm.style.display = 'block';
    }else {
        studentForm.style.display = 'none';
    }

}