function remove1() {
	var r = document.getElementById('sent').value;
	var charat = r.trim();
	var m=0;
	var arr = new String();
	var cnt=0;
	for(var i in charat){
		
		if(charat[i]==' '){
			cnt++;
            i++;
		}
		else{
           arr += charat[i];
           i++;
           m++;
		}
		if(cnt>1){
			arr += charat[i-cnt+1];
			m++;
            cnt = 0;
            i++;
		}
	}
	alert(arr);
}