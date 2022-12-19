let pickingList = [];
const fetchData = () => {
	axios({
		url: "http://www.cc.puv.fi/~asa/json/project.json",
		method: "GET",
	}).then((res) => {
		pickingList = res.data;
		renderProduct();
	}).catch((err) => {
		console.log(err);
	});
}

const renderProduct = () => {
	
	let htmlContent=" ";
	for (let productList of pickingList) {
	var products=productList.products;
	var orderID=document.getElementById("orderID").value;
	var customerID=document.getElementById("customerID").value;
	var date=document.getElementById("date").value;

	for(var i=0; i<products.length;i++){
		if(productList.orderid==orderID || productList.customerid==customerID || productList.deliverydate==date){
			document.getElementById("info1").innerHTML="Order ID :"+" "+ productList.orderid;
			document.getElementById("info2").innerHTML="Customer ID :" +" "+productList.customerid;
			document.getElementById("info3").innerHTML="Customer :"+" "+productList.customer;
			document.getElementById("info4").innerHTML="Invaddr :"+" "+productList.invaddr;
			document.getElementById("info5").innerHTML="Delivaddr :"+" "+productList.drlivaddr;
			document.getElementById("info6").innerHTML="Delivery date :"+" " +productList.deliverydate;
			document.getElementById("info7").innerHTML="Resaler :"+" "+productList.respsalesperson;
			document.getElementById("info8").innerHTML="Comment :"+" "+productList.comment;
			document.getElementById("info9").innerHTML="Total price :"+" "+productList.totalprice;
			htmlContent+=
				`<tr>
				<td><input type="checkbox" id="t1">
				<lable for="t1"></lable></td>
					<td>${products[i].code}</td>
					<td>${products[i].product}</td>
					<td>${products[i].description}</td>
					<td>${products[i].suppliercode}</td>
					<td>${products[i].qty}</td>
					<td>${products[i].unit_price}</td>
					<td>${products[i].shelf_pos}</td>
				</tr>`;
		}
	}
}
	document.getElementById("tablePickingList").innerHTML = htmlContent;
}

fetchData();
