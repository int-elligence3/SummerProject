// document.getElementById('contactform').addEventListener('submit', sumbitform);

// // var messageref = firebase.database().ref('message');
// const database = firebase.database();

// function sumbitform(e){
//     e.preventDefault();
//     var first = getInputVal('first');
//     var last = getInputVal('last');
//     var email = getInputVal('email');
//     var message = getInputVal('message');
//     // var first = getInputVal('first');
//     // console.log(first);

//     savemessage(first, last, email, message);

// }

// function getInputVal(id){
//     return document.getElementById(id).value;
// }

// function savemessage(first, last, email, message){
//     var newmessageref = messageref.push();
//     newmessageref.set({
//         first: first,
//         last: last,
//         email: email,
//         message: message

//     });
// }
const database = firebase.database();

const submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    var newPostKey = firebase.database().ref().child('users').push().key;
    const contactform = getInputVal('contactform');
    const first = getInputVal('first');
    const last = getInputVal('last');
    const email = getInputVal('email');
    const message = getInputVal('message');
    database.ref('users/' + newPostKey).set({
        first: first,
        last: last,
        email: email,
        message: message

    });

    alert('Your data has been sumbitted. Please referesh the page to continue!');

    // return true;

});

function getInputVal(id) {
    return document.getElementById(id).value;
}

// function savemessage(first, last, email, message) {
//     var newmessageref = messageref.push();
//     newmessageref.set({
//         first: first,
//         last: last,
//         email: email,
//         message: message

//     });
// }

document.getElementById("contactform").onsubmit = function(){
    location.reload(true);
}