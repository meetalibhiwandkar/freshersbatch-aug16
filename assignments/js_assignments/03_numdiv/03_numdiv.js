function accepted() {
    var no1 = document.getElementById('num1').value;
    var no2 =  document.getElementById('num2').value;
    if(no2 == "0")
    {
    	alert("The division cannot be performed because the second number is zero");
    }
    else {
    	document.write("Division can be done");
    }
}