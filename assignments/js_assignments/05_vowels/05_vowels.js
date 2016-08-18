function check() {
	var ch = document.getElementById('alpha').value;
	if(ch=="a"|| ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"|| ch=="E"||ch=="I"||ch=="O"||ch=="U"){
		document.write("The entered character is a vowel");
	}
	else{
		document.write("The entered character is not a vowel");
	}

}