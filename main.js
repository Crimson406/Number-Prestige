var currency0 = 0
var currency0Increase = 1
var currency0IncreaseIncrease = 2
var upg1p0Price = 5
var upg1p0priceIncrease = 5
var upg2p0Price = 1000
var upg2p0PriceIncrease = 8
function incrementNumber(){
    currency0 += currency0Increase;
    updateCurrency0Display()
}
function updateCurrency0Display(){
    document.getElementById("currency0Amount").textContent = currency0;
}
function buyUpg1p0(){
    if(currency0>=upg1p0Price){
        currency0 -= upg1p0Price;
        upg1p0Price *= upg1p0priceIncrease
        currency0Increase *= currency0IncreaseIncrease
        updateCurrency0Display()
        document.getElementById("upg1p0Button").textContent="Double your number per click. Costs " + upg1p0Price;
        document.getElementById("numberIncreaseButton").textContent="Increase your number by " + currency0Increase;
    }
}
function buyUpg2p0(){
    if(currency0 >= upg2p0Price){
        currency0 -= upg2p0Price;
        upg2p0Price *= upg2p0priceIncrease;
        updateCurrency0Display();
        document.getElementById("upg2p0Button").textContent= "Multiply your number per click by 2.5. Costs " + upg2p0Price;
        document.getElementById("numberIncreaseButton").textContent="Increase your number by " + currency0Increase;
    }
}
