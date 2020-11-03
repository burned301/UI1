document.addEventListener('DOMContentLoaded', () => {
    //if(getCurrentUser() !== null) showSection('index');
    document.querySelector('#login-form-submit').addEventListener('click',validateLoginForm);
});

function validateLoginForm() {
    const email = document.forms['login']['login-user'].value;
    const password = document.forms['login']['login-password'].value;

    const user = getUser(email);

    if(user === null){
        document.querySelector('#login-error').style.display = 'flex';
    } else if(password === user.password) {
        setCurrentUser(user);
        showSection('index')
    }
    return false;
}


