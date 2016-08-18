function calculateage(){
	var currentdate = new Date();
	var calyear = document.getElementById("age").value;
	var year= currentdate.getFullYear();
	var birth_year = year - calyear;
	document.write("The birth year is"+ birth_year);
}