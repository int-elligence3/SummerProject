if(localStorage.getItem("userLogin") == null){
  document.getElementById("profile").style.display = "none";
}
else{
  document.getElementById("profile").style.display = "block";
}

function openform() {
    if(localStorage.getItem("userLogin") == null){
      document.getElementById("form-open").style.zIndex = "10";
      modal.classList.add("is-open");
      body.style.overflow = "hidden";
    }
    else{
      window.location.replace("assets/upload.html");
    }
  }

  function closeform() {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
    document.getElementById("form-open").style.zIndex = "-1";
  }

  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");

  

//   firebase
var firebaseConfig = {
    apiKey: "AIzaSyD5PRI0eqBYwuXQPtd1RRKHNuAWcw8PYnI",
    authDomain: "contactform-e7f07.firebaseapp.com",
    databaseURL: "https://contactform-e7f07-default-rtdb.firebaseio.com",
    projectId: "contactform-e7f07",
    storageBucket: "contactform-e7f07.appspot.com",
    messagingSenderId: "71270380712",
    appId: "1:71270380712:web:ca0b04c1788ea74818fe9d",
    measurementId: "G-78Y0T1BYTV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
// Google Login
  document.getElementById("googlelogin").addEventListener('click', GoogleLogin);
  let googleprovider = new firebase.auth.GoogleAuthProvider()
  
  function GoogleLogin(){
    console.log('login')
    firebase.auth().signInWithPopup(googleprovider).then(res =>{
      console.log(res)
    }).catch(e =>{
      console.log(e)
    })
  }

function RegisterUser(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        alert("Registration successful");
    }).catch(function(error){
        if(error.message === "The email address is already in use by another account.");
        alert(error.message + " Try login instead of register.");
    });
}

function LoginUser(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      localStorage.setItem("userLogin", "true");
      alert("Login successful");
      window.location.replace("index.html");      
  }).catch(function(error){
      alert(error.message);
  });
}

var githubProvider = new firebase.auth.GithubAuthProvider();
var github = 0;
function signInGitHub(){
  firebase.auth().signInWithPopup(githubProvider).then(res=>{
    let token = res.credential.accessToken;
    let user = res.user;
    localStorage.setItem("userLogin", "true");
    alert("Login successful");
    window.location.replace("index.html");
    console.log(user);
    github = 1;
  }).catch(e=>{
    console.log(e.message);
  });
}

// check state
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    console.log(user);
  }else{

  }
});

function logOut(){
  if(github === 1){
    firebase.auth().signOut().then(()=>{
      alert('User logged out successfully')
    }).catch(e=>{
      console.log(e.message);
    })
  }
  localStorage.removeItem("userLogin");
  window.location.replace("index.html"); 
}

// function logOut(){
//   localStorage.removeItem("userLogin");
//   window.location.replace("index.html"); 
// }
