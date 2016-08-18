function emp_list() {
	var emp_list = [ {Empid:10, Ename:"Mahesh", Empsalary:2000, Deptno: 3 },
	{Empid :2 , Ename:"Manish", Empsalary:5000, Deptno:2},
	{Empid :32 ,Ename:"Sayli", Empsalary:30000, Deptno:5},
	{Empid :5 ,Ename:"Simran", Empsalary:20000, Deptno:1}];
	emp_list.sort(function(a,b) {return (a.Empid > b.Empid) ? 1 : -1;} );
	//console.log(emp_list[0]["Empid"]);
	for(var i=0;i<emp_list.length;i++)
	{
		document.write("Emp-id:"+emp_list[i].Empid+"  Emp-name:"+emp_list[i].Ename+" Emp-salary:"+emp_list[i].Empsalary+" Emp-deptno:"+emp_list[i].Deptno+"<br>");
		

	}
	/*
    var new_arr = new Array();
	for(var i=0; i<4;i++){
        new_arr[i]= emp_list[i]["Empid"];
	}
	new_arr.sort(function(a,b){return a-b;});
	sort(new_arr);
	*/
}

// function sort(new_arr){
//     var temp=new_arr[0];
//    for(var i=1;i<new_arr.length;i++){
//        if(temp>new_arr[i]){
//        	   new_arr[i]=temp;
//             temp = new_arr[i+1]
//        }
//    }
// }