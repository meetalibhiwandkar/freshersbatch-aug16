var categories=["All Categories","Cars & Bikes","Mobiles","Clothes","Furniture","Pets"];

var adId;


function category_search(){
var sel= document.getElementById("category");


for(var i=0;i<categories.length;i++){
	 var option = document.createElement("option");
	    option.innerHTML = categories[i];
	    option.value = categories[i];
	    sel.appendChild(option);

}
}
function category_search1(){
var sel1= document.getElementById("category1");

for(var i=0;i<categories.length;i++){
	 var option = document.createElement("option");
	    option.innerHTML = categories[i];
	    option.value = categories[i];
	    sel1.appendChild(option);

}
}

 function searching(){

 	var keyword=document.getElementById('keyword').value.toUpperCase();
 	var sort_order=document.getElementById('price').value;
 	var date=document.getElementById('date').value;
 	var category=document.getElementById('category1').value.toUpperCase();

 	var ads_count_string=localStorage.getItem("ads_count");
 	var number_of_ads=Number(ads_count_string);
 	for(var i=1;i<=number_of_ads;i++){
 		var lastObject = JSON.parse(localStorage.getItem("ad"+i));
 		console.log(lastObject[0].adtitle);
 		var temp_title=lastObject[0].adtitle;
 		temp_title=temp_title.toUpperCase();
 		var temp_price=lastObject[0].price;
 		if(lastObject[0].category.toUpperCase()==category&&temp_title.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp_title.indexOf(keyword)>=0||lastObject[0].category.toUpperCase()==category&&temp_price.indexOf(keyword)>=0||"ALL CATEGORIES"==category&&temp_price.indexOf(keyword)>=0 ){
		var first_div=document.createElement('div');
		first_div.className="row";
		var second_div=document.createElement('div');
		second_div.className="col-md-5";
			var third_div=document.createElement('div');
			third_div.className="product-holder";
				var fourth_div=document.createElement('div');
				fourth_div.className="product-item-2";
					var fifth_div=document.createElement('div');
					fifth_div.className="product-thumb";
						var image=document.createElement('img');
						image.src=lastObject[0].image_path;
					fifth_div.appendChild(image);
					var sixth_div=document.createElement('div');
					sixth_div.className="product-content overlay";
						var product_title=document.createElement("p");
						product_title.innerHTML=lastObject[0].adtitle;
						var description=document.createElement('span');
						description.className="tagline";
						description.innerHTML=lastObject[0].description;
						var price=document.createElement('span');
						price.className="price";
						price.innerHTML=lastObject[0].price;
						
						var buy=document.createElement('button');
						buy.className="btn btn-info";
						buy.value="Buy";
						buy.innerHTML="Buy";
					sixth_div.appendChild(product_title);
					sixth_div.appendChild(description);
					sixth_div.appendChild(price);
					sixth_div.appendChild(buy);
				fourth_div.appendChild(fifth_div);
				fourth_div.appendChild(sixth_div);
			third_div.appendChild(fourth_div);
		second_div.appendChild(third_div);
		first_div.appendChild(second_div);
		document.getElementById('main-content').appendChild(first_div);	
		}									
 	}


 
} 



function post_ad(){
	//localStorage.clear();
	var input_adtitle=document.getElementById('adtitle').value;
	var input_addesc=document.getElementById('addescription').value;
	var input_category=document.getElementById('category').value;
	var input_price=document.getElementById('input-price').value;
	var input_image_path=document.getElementById('image_upload').value;
	var input_contact_no=document.getElementById('contact_no').value;
	
	var post_date= new Date();
	
	var ads_count_string = localStorage.getItem("ads_count");
	console.log("PostCount full str " +ads_count_string);
	var ads_count=0;
	if(ads_count_string == null || ads_count_string =="null" || ads_count_string=="NaN")
		ads_count = 0;
	else
		ads_count = Number(ads_count_string);	
	
	var index = ads_count+1;
	
	var advertisements=[{
		id : index,
		description:input_addesc,
		adtitle : input_adtitle,
		category : input_category,
		price : input_price,
		contact_no : input_contact_no,
		image_path : input_image_path,
		likes : "6",
		dislikes : "7",
		date : post_date,
		selling_status : "0"
		
	}];
	
	adId = "ad"+index;
	var postId= adId;
	//var postId = "adId"+index;
	localStorage.setItem(adId, JSON.stringify(advertisements))
	localStorage.setItem("ads_count",index);

	console.log(ads_count);
	console.log(adId);
	for(var i=1;i<=postId;i++)
	{var lastObject = JSON.parse(localStorage.getItem(i));
	console.log("Add titiel "+lastObject[0].adtitle);
	}
}




