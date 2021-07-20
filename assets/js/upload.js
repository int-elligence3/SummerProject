
let pdfs;
fileButton.addEventListener('change', function(e){
	for(let i = 0; i < e.target.files.length; i++){
		pdfs = e.target.files[i];
	}
});
upload.addEventListener('click', function(e){
	let storageRef = firebase.storage().ref("documents/" + pdfs.name);
	let task = storageRef.put(pdfs);
	task.on('state_changed', function progress(snapshot){
	let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
	if(percentage === 100){
		alert("Uploaded successfully!");
	}
	console.log("Upload is " + percentage + " % done");
	switch(snapshot.state){
		case firebase.storage.TaskState.PAUSED :
		console.log("Upload is paused");
		break;
		case firebase.storage.TaskState.RUNNING :
		console.log("Upload is running");
		break;
	}
	})
})