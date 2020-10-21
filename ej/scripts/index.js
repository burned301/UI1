document.addEventListener('DOMContentLoaded', () => {
    showSection("subjects");
    document.querySelectorAll('.message-pic').forEach( image => {
        image.addEventListener('click',sendMail);
    })
});


function sendMail(to,subject,message){
    window.location.href = `mailto:${to}?subject=${subject}&body=${message}%20goes%20here`;
}

function showSection(section){
    const subjects = document.querySelector('#subjects');
    const students_grades = document.querySelector('#students-grades');
    const student_list = document.querySelector('#students-list');
    const subject_forum = document.querySelector('#subject-forum');

    switch (section){
        case "subjects":
            subjects.style.display = 'block';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
        case "students-grades":
            subjects.style.display = 'none';
            students_grades.style.display = 'block';
            student_list.style.display = 'none';
            subject_forum.style.display = 'none';
            break;
        case "students-list":
            subjects.style.display = 'none';
            students_grades.style.display = 'none';
            student_list.style.display = 'flex';
            subject_forum.style.display = 'none';
            break;
        case "subject-forum":
            subjects.style.display = 'none';
            students_grades.style.display = 'none';
            student_list.style.display = 'none';
            subject_forum.style.display = 'block';
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

