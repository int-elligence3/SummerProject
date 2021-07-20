
// Log out feature

if (localStorage.getItem("userLogin") == null) {
    document.getElementById("profile").style.display = "none";
}
else {
    document.getElementById("profile").style.display = "block";
}

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

var github = 0;
var googlelogin = 0;