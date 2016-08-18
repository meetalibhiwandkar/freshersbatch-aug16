function prime() {
	var no1 = document.getElementById('num1').value;
	var no2 = document.getElementById("num2").value;
	var number = new Array();
	while(no1 <= no2){
        var flag = 0;
        var i=0;
        for(i=2; i<=10; i++){
            if(no1==i){
                continue;
            }
            if((no1%i)==0){
                flag = 1;
                break;
            }
        }
        if (flag==0) {
            number += no1; 
        }
        ++no1;
    }
  //document.write(number+" ");
  for(var i in number){
    document.write(number[i]+" ");
  }
}