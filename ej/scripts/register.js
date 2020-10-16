document.addEventListener('DOMContentLoaded', () => {
    studentForm(false);
});


function register(){
    const form = document.forms['register'];

    const username = form['username'];

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