var list = document.querySelectorAll('#list div.card div a');
var products = document.querySelector('#products');
var numOfItems =document.querySelector('#num');
var counter = 0;
var numshow = 1;
var btn = document.querySelector('#btn');
var span = document.querySelector('#sum-total');
var totalPrice = 0
var cong = document.querySelector('#cong');

list.forEach(function (item) {
    item.onclick = function () {
        totalPrice += parseInt(item.getAttribute('price'));
        products.innerHTML += numshow++ + ') ' + item.getAttribute('product-name') + '<br>' + '<br>';
        if (products.innerHTML != "") {
            btn.style.display = "block";
        }
        counter++;
        numOfItems.innerHTML = counter;
    }
});

btn.onclick = function () {

    if(totalPrice > 2000)
        {
            span.style.backgroundColor = "green";
            cong.style.display = "block";
        }

    span.innerHTML = "$" + totalPrice; 
}


