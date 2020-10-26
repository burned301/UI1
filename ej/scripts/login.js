document.addEventListener('DOMContentLoaded', () => {
    if(getCurrentUser() !== null) window.location.href = 'index.html';
    document.querySelector('#form-submit').addEventListener('click',validateLoginForm);

});



function validateLoginForm() {
    const email = document.forms['login']['user'].value;
    const password = document.forms['login']['password'].value;

    const user = getUser(email);

    if(user === null){
        document.querySelector('#login-error').style.display = 'flex';
    } else if(password === user.password){
        setCurrentUser(user);
        window.location.href = 'index.html';
    }
    return false;
}


