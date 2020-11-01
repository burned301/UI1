document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    calendar();
    calendar();
    showSection("subjects");

    document.querySelectorAll('.message-pic').forEach( image => {
        image.addEventListener('click',sendMail);
    })
    document.querySelectorAll('.forum-subject').forEach( message => {
        message.addEventListener('click', forum);
    })
    document.querySelector('#forum-subject-send-button').addEventListener('click',sendMessage);
    document.querySelector('#forum-subject-send').style.display = 'none';
    document.querySelector('#dropdown').addEventListener('click', dropDownClick);
});

document.addEventListener('DOM')

function logOut(){
    if(confirm("¿Cerrar Sesión?")){
        setCookie("","current_user", -1);
        window.location.href = "login.html";
    }
}

function loadUser(){
    const user = getCurrentUser();
    if(user === null){
        window.location.href = "login.html";
        return
    }
    document.querySelector("#user-name").innerHTML = user.name;
    if(user.role === "Estudiante"){
        document.querySelectorAll('.admin').forEach(item => {
            item.style.display = 'none';
        })
    }else{
        document.querySelectorAll('.estudiante').forEach(item => {
            item.style.display = 'none';
        })
    }

}

function sendMail(to,subject,message){
    window.location.href = `mailto:${to}?subject=${subject}&body=${message}%20goes%20here`;
}

function showSection(section){
    const subjects = document.querySelector('#subjects');
    const students_grades = document.querySelector('#students-grades');
    const student_list = document.querySelector('#students-list');
    const subject_forum = document.querySelector('#subject-forum');
    const student_subjects = document.querySelector('#student-subjects');
    switch (section){
        case "subjects":
            subjects.style.display = 'block';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            student_subjects.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
        case "students-grades":
            subjects.style.display = 'none';
            students_grades.style.display = 'block';
            student_list.style.display = 'none';
            student_subjects.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
        case "students-list":
            subjects.style.display = 'none';
            students_grades.style.display = 'none';
            student_list.style.display = 'flex';
            student_subjects.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
        case "subject-forum":
            subjects.style.display = 'none';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            student_subjects.style.display = 'none';
            subject_forum.style.display = 'block';

            hideMessages();
            break;
        case "student-subject":
            subjects.style.display = 'none';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            student_subjects.style.display = 'block';
            subject_forum.style.display = 'none';
            break;
        default:
            alert("Estás cargando el deafult lmao");
            subjects.style.display = 'block';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
    }

    return false;
}

function forum(){
    document.querySelectorAll(".forum-subject").forEach(message =>{
        message.style.display = 'none';
    });
    this.style.display = 'flex';
    document.querySelector('#forum-subject-send').style.display = 'block';

}

function hideMessages(){
    document.querySelectorAll('.forum-message').forEach(message => {
        message.style.display = 'none';
    });
}

function sendMessage(){
    const user = getCurrentUser();
    const text =  document.querySelector("#forum-subject-new");

    const message = document.createElement('div');
    message.setAttribute('class', 'forum-message');

    const img = document.createElement('img');
    img.setAttribute('src', 'images/icon.png');
    img.setAttribute('class', 'forum-message-icon');

    const body = document.createElement('div');
    const name = document.createElement('div');
    const message_body = document.createElement('div');

    name.innerHTML = user.name;
    message_body.innerHTML =text.value;
    text.value = '';

    const date = document.createElement('div');
    date.setAttribute('class', 'forum-message-date');
    const time = new Date();
    date.innerHTML = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;

    body.append(name);
    body.append(message_body);

    message.append(img);
    message.append(body)
    message.append(date);

    document.querySelector('#forum-messages').append(message);
    return false;

}

let dropDownState = false;
function dropDownClick(){
    if(dropDownState){
        document.querySelector('#dropdown-content').style.display = 'none';
        dropDownState = false;
    }else{
        document.querySelector('#dropdown-content').style.display = 'block';
        dropDownState = true;
    }
}

function downloadTable() {
    $(function() {
        $(getCurrentUser().role === "Estudiante" ? "#noadmin-student-grade-table" : "#admin-student-grade-table").table2excel({
            filename: "student-grade-table",
            name: "Estudiante"
        });
    });
}

function calendar(){
    $(function(){
        $("#calendar").simpleCalendar({
            displayEvent: true,
            events: [
                {
                    startDate:new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                    endDate:new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                    summary:'Interfaces de Usuario: Examen Tema 1'
                },
                {
                    startDate:new Date(new Date().setHours(new Date().getHours() + 48)).toDateString(),
                    endDate:new Date(new Date().setHours(new Date().getHours() + 49)).toISOString(),
                    summary:'Interfaces de Usuario: Examen Tema 2'
                },
                {
                    startDate:new Date(new Date().setHours(new Date().getHours() + 72)).toDateString(),
                    endDate:new Date(new Date().setHours(new Date().getHours() + 73)).toISOString(),
                    summary:'Interfaces de Usuario: Examen Tema 3'
                }
            ]
        });
    });
}