
document.body.style.backgroundImage = "url('images/bgcontact.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


const database = firebase.database();

const submit = document.getElementById('submit');


submit.addEventListener('submit', (e) => {
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

    alert('Thank you for your valuable feedback');
    document.getElementById('first').value = "";
    document.getElementById('last').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

    // return true;

});

function getInputVal(id) {
    return document.getElementById(id).value;
}

function logOut(){
	if(github === 1 || googlelogin == 1){
	  firebase.auth().signOut().then(()=>{
		alert('User logged out successfully')
	  }).catch(e=>{
		console.log(e.message);
	  })
	}
	localStorage.removeItem("userLogin");
	window.location.replace("../index.html"); 
  }
