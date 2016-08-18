function usercheck() {
	var user_name = document.getElementById('user').value;
	var pass_name = document.getElementById("pass").value;
	var counter = document.getElementById("hidd").value;
	var actual_username = "meetali";
	var actual_password = "meetali123";
	if((actual_username.localeCompare(user_name)==0)&&(actual_password.localeCompare(pass_name)==0)){
		document.write("Correct credentials");
	}
	else{
     counter++;
     alert("Incorrect credentials");
     document.getElementById("hidd").value =counter;
     if (counter>3) { 
     document.write("You cannot login due to three times incorrect attempts");
	}
	}
	
}