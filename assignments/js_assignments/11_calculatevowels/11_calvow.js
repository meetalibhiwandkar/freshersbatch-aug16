function calvowels() {
	var sentence = document.getElementById('sent').value;
	var char_array = [...sentence];
	var cnt_a = 0;
	var cnt_e = 0;
	var cnt_i = 0;
	var cnt_o = 0;
	var cnt_u = 0;
    for(var i in char_array){
    	if(char_array[i]=='a')
             cnt_a++;
         if(char_array[i]=='e')
             cnt_e++;
         if(char_array[i]=='i')
             cnt_i++;
         if(char_array[i]=='o')
             cnt_o++;
         if(char_array[i]=='u')
             cnt_u++;
    }
    document.write("a= "+cnt_a+" e= "+cnt_e+" i= "+cnt_i+" o= "+cnt_o+" u= "+cnt_u);
}