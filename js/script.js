// validazione per il nome del burger immesso dall'utente


// dichiaro la var bottone "calcola"
// con Event Listener che "aspetta" il click
var calculateButton = document.getElementById("calculate_btn");
calculateButton.addEventListener("click", function() {

    // dichiaro il prezzo base del burger
    var priceBurger = 10;

    // dichiaro var degli ingredienti per utilizzarli nel ciclo
    var  ingredientCheckbox = document.getElementsByClassName("ingredient");
    
    // ciclo for per vedere quale ingrediente è checkato
    for (var i = 0; i < ingredientCheckbox.length; i++) {
        var thisCheckbox = ingredientCheckbox[i];
        
        // if per aggiungere il prezzo degli ingredienti al prezzo base
        if(thisCheckbox.checked) {
            var thisIngredientPrice = parseInt(thisCheckbox.value);
            priceBurger += thisIngredientPrice;
        }
    }

    // dichiaro una var per leggere il valore inserito
    //  dall'utente nell'input coupon nell'html
    var couponInserted = document.getElementById("coupon").value;

    // dichiaro una var di array con i coupon esistenti
    var couponCodes = ["12345678", "1234ABCD", "ABCDEFGH"]

    // if con funzione includes per vedere se il valore inserito
    // dall'utente corrisponde ad un coupon esistente
    if (couponCodes.includes(couponInserted)) {

        // applichiamo la classe show per far apparire il messaggio
        var discountApply = document.getElementById("discount_apply");
        discountApply.className = "show";

        // aggiorno il prezzo con lo sconto del 20%
        priceBurger -= (priceBurger * 0.2)
    }

    // converto il prezzo in 2 cifre decimali e lo
    var finalePriceBurger = priceBurger.toFixed(2);
    // e lo stampo nell'html
    document.getElementById("price").innerHTML = "$ " + finalePriceBurger;

});