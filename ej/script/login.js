document.addEventListener('DOMContentLoaded', () => {
    //if(getCurrentUser() !== null) showSection('index');
    document.querySelector('#login-form-submit').addEventListener('click',validateLoginForm);
});

function validateLoginForm() {
    const email = document.forms['login']['login-user'].value;
    const password = document.forms['login']['login-password'].value;
    const user = getUser(email);
    const error = document.querySelector('#login-error');

    error.style.display = 'none';

    if(user === null || user.password !== password){
        error.style.display = 'flex';
    } else if(password === user.password) {

        document.querySelector('#login-form').reset();
        setCurrentUser(user);
        showSection('index')
    }
    return false;
}


