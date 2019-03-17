var Grocery = /** @class */ (function () {
    function Grocery(itemName) {
        this.itemName = itemName;
        this.name = itemName;
    }
    return Grocery;
}());
function greeter(item) {
    return item.itemName;
}
var item1 = new Grocery("Eggs");
var item2 = new Grocery("Milk");
var item3 = new Grocery("Soda");
var item4 = new Grocery("Chips");
var item5 = new Grocery("Fruit");
var item6 = new Grocery("Cookies");
document.body.innerHTML = "This is my grocery list: " + "<br/>" + greeter(item1) + "<br/>" + greeter(item2)
    + "<br/>" + greeter(item3) + "<br/>" + greeter(item4) + "<br/>" + greeter(item5) + "<br/>" + greeter(item6);
