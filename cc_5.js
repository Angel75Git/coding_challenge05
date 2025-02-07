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