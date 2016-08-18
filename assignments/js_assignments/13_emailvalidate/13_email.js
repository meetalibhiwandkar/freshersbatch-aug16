function address(){
	var r = document.getElementById('emailid').value;
	var apos = r.indexOf("@");
	var dotpos = r.indexOf("."); 
	if(apos>1&&(dotpos>(apos+2))){
		alert("valid email-address");
	}
	else
		alert("InCorrect email-address");
}