

var fullImgBox = document.getElementById ("fullImgBox");
var fullImg = document.getElementById ("fullImg");

function openFullImg (pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgBox.style.display="none";
}


function togglePopup(){

    document.getElementById("popup-1").classList.toggle("active");
}


// cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

//open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

//close-cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};
//cart working js

if (document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded" , ready)
}else{
    ready();
}
// making function
function ready(){
    //remove items from cart 
     var removeCartButtons = document.getElementsByClassName('cart-remove')
     console.log(removeCartButtons);
     for (var i = 0; i < removeCartButtons.length; i++){
         var button = removeCartButtons[i];
         button.addEventListener('click', removeCartItem);
     }
     //quantity changes
     var quantityInputs = document.getElementsByClassName("cart-quantity");
     for (var i = 0; i < quantityInputs.length; i++){
         var input = quantityInputs[i];
         input.addEventListener("change", quantityChange);
     }
     //add to cart
     var addCart = document.getElementsByClassName("add-cart")
     for (var i = 0; i < addCart.length; i++){
         var button = addCart[i];
         button.addEventListener('click', addCartClicked);
        //  let addCart = document.getElementsByClassName("add-cart")
         let count = 0 ;
         button.addEventListener("click",function(){
            count+= 1;
            console.log(count);
            // document.querySelector('.append').textContent = count;
         });
     }

     
 // BUY BUTTON WORK
 document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
}
// buy button

function buyButtonClicked(){
    alert('your order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
      cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

//quantity  changes
function quantityChange(event){
    var input = event .target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1; 
   }   
   updatetotal(); 
}

// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//add to cart
    
    var btn = document.getElementById("display");
    var disp = document.getElementById("cart-icon");
    var countNum = 0;
    function displayCount () {
    countNum ++;
    disp.innerHTML = countNum;
    }


function addCartClicked(event){
    var button = event.target
    var shopProducts = button .parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title ,price,productImg);
    updatetotal();

}
function addProductToCart(title ,price , productImg ){
    var cartShopBox = document.createElement("div");
   // cartShopBox.classList.add("cart-box");
   var cartItems = document.getElementsByClassName("cart-content")[0];
   var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
   for (var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i] .innerText == title){   
    alert("you have already add this item to cart");
       return;  
   } 

  
}
var cartBoxContent = `
         <div class="cart-box">
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        </div>
        <!--Remove Cart  -->
        <i class='fa fa-trash cart-remove'></i> `;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChange);

}
//update total
function updatetotal(){
    var  cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("R",""));
        var quantity = quantityElement.value ;
        total = total + ( price * quantity );
    }
// if price contain some cents value

  total = Math.round(total *100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "R" + total;
}

//change image every sec

let image = document.getElementById('image');
let images = ['pc1.jpg','pc2.jpg','pc3.jpg','pc4.jpg']

setInterval(function(){
   let random = Math.floor(Math.random()* 4);
   image.src = images[random];
}, 800);

let pic = document.getElementById('pics');
let pictures = ['pc1.jpg','pc2.jpg','pc3.jpg','pc4.jpg']

setInterval(function(){
   let random = Math.floor(Math.random()* 4);
   pic.src = pictures[random];
}, 800);

// 

var close = document.getElementById("demo");
function toggle(){
    close.style.display="none";
}
    

// 



let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
var fullImgBox = document.getElementById ("fullImgBox");
var fullImg = document.getElementById ("fullImg");

function openFullImg (pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgBox.style.display="none";
}
function togglePopup(){

    document.getElementById("popup-1").classList.toggle("active");
}

// 

let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// 

let availableKeywords = [
    't-shirts girls',
    'night wear',
    'pjams',
    'ladies skirts',
    'mans shirt',
    'ladies shoes',
    'winter coats',
    'summer sweaters'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return"<li onclick=selectInput(this)>" + list + "</li>";

    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
