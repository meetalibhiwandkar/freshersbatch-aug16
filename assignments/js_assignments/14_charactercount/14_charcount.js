function sentence() {
	var r = document.getElementById('sent').value;
	var word =[...r];
	var cnt = 0
	for(i in word){
      if(word[i]==' '|| word[i]=='.' || word[i]==',')
      	continue;
      cnt++;
	}
	document.write("The number of characters are: "+cnt);
}