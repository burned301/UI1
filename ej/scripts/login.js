document.addEventListener('DOMContentLoaded', () => {
    if(getCurrentUser() !== null) window.location.href = 'index.html';
});



function validateLoginForm() {
    const email = document.forms['login']['user'].value;
    const password = document.forms['login']['password'].value;

    const user = getUser(email);

    if(user === null){
        document.querySelectorAll('#login-error').style.display = 'flex';
    } else if(password === user.password){
        setCurrentUser(user);
        window.location.href = 'index.html';
    }
    return false;
}


