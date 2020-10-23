document.addEventListener('DOMContentLoaded', () => {
    if(getUsers() === null) createUserDB();
});

function getUser(email){
    const users = getUsers();
    users.forEach(user => {
        if(user.email === email) return user;
    })
    return null;
}

function getUsers(){
    const users = getCookie("users");
    if(users === null) return null;
    return JSON.parse(users)["users"];
}

function createUserDB(){
    const cookie = {
        users: []
    };
    setCookie(cookie, "users", 10);
}

function addUser(user){
    const users = getUsers();
    users.push(user);
    setCookie(users, "users", 10);
}


function setCookie(cookie, name, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "="+ JSON.stringify(cookie)+";"+ expires + ";path=/";
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
    return null;
}