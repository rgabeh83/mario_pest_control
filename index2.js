console.log(document)

function pestPrice(goo, bob, cheep) {
    var goo = document.getElementById("goombas").value;
    var bob = document.getElementById("bob-ombs").value;
    var cheep = document.getElementById("cheep-cheeps").value;
    gooPrice = parseInt(goo) * 5;
    bobPrice = parseInt(bob) * 7;
    cheepPrice = parseInt(cheep) * 11;
    price = gooPrice + bobPrice + cheepPrice;
    document.getElementById("totalPrice").value = price
 }

 var addButton = document.getElementById("priceButton")
 addButton.addEventListener("click", pestPrice)