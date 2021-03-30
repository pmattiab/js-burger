var calculateButton = document.getElementById("calculate_btn");
calculateButton.addEventListener("click", function() {

    var priceBurger = 10;

    var  ingredientCheckbox = document.getElementsByClassName("ingredient");
    
    for (var i = 0; i < ingredientCheckbox.length; i++) {
        var thisCheckbox = ingredientCheckbox[i];
        
        if(thisCheckbox.checked) {
            var thisIngredientPrice = parseInt(thisCheckbox.value);
            priceBurger += thisIngredientPrice;
        }
    }

    var couponInserted = document.getElementById("coupon").value;
    var couponCodes = ["12345678", "1234ABCD", "ABCDEFGH"]

    for (var j = 0; j < couponCodes.length; j++) {
        thisCoupon = couponCodes[j];
        if (thisCoupon == couponInserted) {
            var discountApply = document.getElementById("discount_apply");
            discountApply.className = "show";
            priceBurger -= (priceBurger * 0.2)
        }
    }

    var finalePriceBurger = priceBurger.toFixed(2);
    document.getElementById("price").innerHTML = "$ " + finalePriceBurger;

});