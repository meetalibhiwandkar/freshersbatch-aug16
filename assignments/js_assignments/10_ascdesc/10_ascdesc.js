function asc() {
  var array_list = new Array()
  array_list[0]= 34;
  array_list[1]= 1;
  array_list[2]= 56;
  array_list[3]= 66;
  array_list[4]= 23;
  array_list.sort();
  document.write("The numbers in ascending order are as follows: "+ array_list);
}

function desc() {
  var array_list = new Array()
  array_list[0]= 34;
  array_list[1]= 1;
  array_list[2]= 56;
  array_list[3]= 66;
  array_list[4]= 23;
  var array_list1 = new Array();
  var cnt = 0;
  array_list.sort();
  for(var i=4 ; i>=0 ; i-- ){
       array_list1[cnt]= array_list[i];
       cnt++;
  }
  document.write("The numbers in descending order are as follows: "+ array_list1);
}