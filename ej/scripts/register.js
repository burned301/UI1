document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-submit').addEventListener('click', register);
    studentForm(false);
});


function register(){

    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });

    document.querySelectorAll('input').forEach( input =>{
        if(!input.checkValidity()) {
            const name = input.getAttribute('name');
            document.querySelector(`#${name}-error`).innerHTML = input.validationMessage;
        }
    })

    return false;
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