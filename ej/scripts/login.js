
function validateLoginForm() {
    const email = document.forms['login']['email'].value
    const password = document.forms['login']['password'].value
    const userCredentials = getCookie(email)
    if (userCredentials !== '') {
        if (password === userCredentials.split('=')[1]) {
            window.location.href = 'index.html'
        }
    } else {
        /* TODO INSERT ERROR MESSAGE */
    }
    return false
}

function getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        if (c.trim().indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
