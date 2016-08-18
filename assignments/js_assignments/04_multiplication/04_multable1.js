function multable() {
	var no = document.getElementById('num').value;
	var no1 = new Array();
	var i = 0 ;
	 while (true){
	 	no1[i] = no*i;
	 	
	 	if(i == "10")
	 		break;
	 	i++;
	 }
	 for (i in no1)
	 document.write(no+"x"+i+"="+no1[i]+"<br>");
	var r = confirm("Do you want to enter a different number");
	if (r==false){
		document.write("You pressed cancel");
	}
	else{
		document.location.href = "04_multable.html"
	}

}