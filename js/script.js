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

    var finalePriceBurger = priceBurger.toFixed(2);
    document.getElementById("price").innerHTML = "$ " + finalePriceBurger;

});