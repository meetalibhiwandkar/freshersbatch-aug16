
	
function  checkPalindrome(){
	var input=document.getElementById('input').value;
	var i,flag;
	var len=input.length;
	for(i=0;i<Math.floor(len/2);i++){
		if(input[i]!=input[len-1-i]){
			flag=1;
			break;
		}
	}
	if(flag==1)
		alert("not a palindrome");
	else
		alert("palindrome");
}

function checkConsonant(){
	var vowels=['a','e','i','o','u'];
	var input=document.getElementById('input').value;
	var flag=0;
	for (i in input){
		if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' ||input[i] == 'u'){
			alert("It is not a consonant");
			flag=1;
			break;
		}
	}
	if (flag!=1)
		alert(input+" is a consonant ");
	
}