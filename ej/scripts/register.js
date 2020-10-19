document.addEventListener('DOMContentLoaded', () => {
    studentForm(false);
});


function register(){

    document.querySelectorAll('.error').forEach(error =>{
        error.innerHTML = "";
    });

    const form = document.forms['register'];
    const mandatoryField = 'Campo obligatorio';

    const username = form['username'];
    const nia = form['nia'];
    const pswd = form['password'];
    const name = form['name'];
    const email = form['email'];
    //const



    /*
    if(!username.checkValidity()) document.querySelector('#username-error').innerHTML = username.validationMessage;
    if(|username.c)
    */


    document.querySelectorAll('input').forEach( input =>{
        if(!input.checkValidity()) {
            const name = input.getAttribute('name');
            let query = `#${name}-error`;
            document.querySelector(query) = input.validationMessage;
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