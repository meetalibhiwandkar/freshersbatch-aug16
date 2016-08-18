
function Calculate() {
	var array_list = new Array();
    array_list[0] = 2; 
    array_list[1] = 4;
    array_list[2] = 32;
    array_list[3] = 12;
    array_list[4] = 18;
	var largest = Math.max(...array_list);
	var smallest = Math.min(...array_list);
	var total=0;
	var avg=0;
	
	for(i in array_list){
          total+=array_list[i];
          
	}
	avg = total/i;
	document.write("Maximum ="+largest+" Minimum ="+smallest+" total ="+total+" Average "+avg);
}