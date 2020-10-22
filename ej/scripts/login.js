
function validateLoginForm() {
    const email = document.forms['login']['user'].value;
    const password = document.forms['login']['password'].value;
    const userCredentials = getCookie(email);
    if (userCredentials !== '') {
        if (password === userCredentials.split('=')[1]) {
            window.location.href = 'index.html';
        }
    } else {
        document.querySelectorAll('#login-error').style.display = 'flex';
    }
    return false;
}


