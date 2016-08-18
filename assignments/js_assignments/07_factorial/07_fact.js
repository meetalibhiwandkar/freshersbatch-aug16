function fact() {
	var num = document.getElementById('fact').value;
	var i;
	var fact=1;
	for(i=num;i>0;i--){
       fact*=i;
	}
	document.write("The factorial of "+num+"is "+fact);
}