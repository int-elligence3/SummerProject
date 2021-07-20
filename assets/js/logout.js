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