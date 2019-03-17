class Grocery {
    name: string;
    constructor(public itemName: string) {
        this.name = itemName;
    }
}

interface Item {
    itemName: string;
}

function greeter(item : Item) {
    return item.itemName;
}

let item1 = new Grocery("Eggs");
let item2 = new Grocery("Milk");
let item3 = new Grocery("Soda");
let item4 = new Grocery("Chips");
let item5 = new Grocery("Fruit");
let item6 = new Grocery("Cookies");


document.body.innerHTML = "This is my grocery list: " + "<br/>" + greeter(item1) + "<br/>" + greeter(item2)
+ "<br/>" + greeter(item3)+ "<br/>" + greeter(item4)+ "<br/>" + greeter(item5)+ "<br/>" + greeter(item6);

