//Task 1
//Creating a customer object
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};


//Logging the properties
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Eamil: ${customer.email}`);

//Task 2
let order = {
    orderID: 12345,
    totalAmount: 150, 
    status: "Processing", 
    displayOrder: function() {
        console.log(`OrderID: ${this.orderID}`);
        console.log(`Total: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
}
//Calling the method
order.displayOrder()

//Task 3
let cartItems =["Toaster", "Butter", "Bread"]
cartItems.push("Sugar");
console.log(cartItems); //Console log to see changes
cartItems.pop();
console.log(cartItems);
cartItems.unshift("Honey");
console.log(cartItems);
cartItems.shift();
console.log(cartItems);

//Task 4
let prices = [100, 200, 300]
let discountPrices = prices.map(prices => prices - (prices * .10));
//Showing change from map method
console.log(`Original: ${prices}`);
console.log(`Discounted: ${discountPrices}`);

//Task 5
let inventory = [5, 0, 12, 8, 0];
//Removing the 1st and 4th index using filter
console.log(inventory.filter(stock => stock !== 0));

//Task 6
let sales = [500, 300, 200, 400];
//Using a arrow function within reduce to add sales
let totalSales = sales.reduce((total, sale) => total + sale, 0);
console.log(`Total sales: $${totalSales}`);

//Task 7
let customers = ["Alice", "Bob", "Charlie", "David"];
//Since we already have a variable customer in task 1,
//the names of variables differ
const findCustomer = customers.find(person => person == "Charlie");
console.log(`We have located: ${findCustomer}`);

//Task 8 
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
//Log the tax portion
console.log(`Calculated Tax: $${calculateTax(188.25, 0.08)}`)

//Task 9
const applyDiscounted = function(price, discount){
    return price - (price * discount);
}
//logging a 25% discount on $1,200
let disPrice = applyDiscounted(1200, 0.25)
console.log(`Discounted price: $${disPrice}`)

//Task 10
const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);
let points = calculatePoints(500);
console.log(`Loyalty points: ${points}`);
