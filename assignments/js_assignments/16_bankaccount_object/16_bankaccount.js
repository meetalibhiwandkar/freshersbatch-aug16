function bankaccount(accno,accName,accbal) {
	this.accno = accno;
	this.accbal = accbal;
	this.accName= accName;
	//document.write(accno + accbal + accName);
	this.withdraw_amt = function withdraw_amt (amt) {
			console.log(" amount "+amt);
			console.log("balance "+this.accbal);
			
           if (this.accbal > amt) {
           		var bal_amt = this.accbal - amt;
           		document.write("The balance is "+bal_amt);
           }else{
           		document.write("Insufficient balance");
           }
	}

	this.deposit_amt = function deposit_amt (amt) {
			console.log(" amount "+amt);
			console.log("balance "+this.accbal);
			
           
           		var bal_amt = this.accbal + amt;
           		document.write("The final balance is "+bal_amt);
           
	}
}
 
 function withdraw() {
 	var accNo = parseInt(document.getElementById('accno').value);
 	var accNAme = document.getElementById('accName').value;
 	var accBal = parseInt(document.getElementById("accbal").value);
 	
 	var amt = parseInt(document.getElementById("with").value);
 	var bankaccount1 = new bankaccount(accNo,accNAme,accBal);
 	bankaccount1.withdraw_amt(amt);
 	
 }

function deposit() {
 	var accNo = parseInt(document.getElementById('accno').value);
 	var accNAme = document.getElementById('accName').value;
 	var accBal = parseInt(document.getElementById("accbal").value);
 	
 	var amt = parseInt(document.getElementById("depo").value);
 	var bankaccount2 = new bankaccount(accNo,accNAme,accBal);
 	bankaccount2.deposit_amt(amt);
 	
 }
 

