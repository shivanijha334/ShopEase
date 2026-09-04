async function placeOrder(){

const cart=JSON.parse(localStorage.getItem("cart"))||[];

if(cart.length===0){
alert("Cart is Empty");
return;
}

const order={

customerName:document.querySelectorAll("input")[0].value,
email:document.querySelectorAll("input")[1].value,
address:document.querySelectorAll("input")[2].value,
products:cart,
total:cart.reduce((sum,item)=>sum+item.price,0)

};

const response=await fetch("http://localhost:5000/api/orders/place",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(order)

});

const data=await response.json();

alert(data.message);

localStorage.removeItem("cart");

window.location.href="index.html";

}