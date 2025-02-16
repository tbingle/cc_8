//Inital Commit
//Task 1- Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {//declare fucnction
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);//formula
    return `Net Salary: $${netSalary.toFixed(2)}`;
}
let result1 = calculateSalary(5000, 500, 0.1);  //first result
let result2 = calculateSalary(7000, 1000, 0.15); //second result

console.log(result1);//Log
console.log(result2);

//Task 2- Function Expression
let calculateDiscount = function(price, discountRate) {//declare function
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;//return value 
};
let result3 = calculateDiscount(100, 0.2);  // First pricr
let result4 = calculateDiscount(250, 0.15); //second price

console.log(result3);//log
console.log(result4);

//Task 3- Arrow Function
let calculateServiceFee = (amount, serviceType) => {//declare arrow function
    
    let serviceFees = {
        "Premium": 0.15,
        "Standard": 0.10,
        "Basic": 0.05
    };
    let fee = serviceFees[serviceType];
    if (fee === undefined) {
        return "Invalid service type";
    }
    return `Service Fee: $${(amount * fee).toFixed(2)}`;
};

let result5 = calculateServiceFee(200, "Premium");  //tests
let result6 = calculateServiceFee(500, "Standard"); 

console.log(result5);//log
console.log(result6);

//Task 4- Parameters and Arguments
let calculateRentalCost = (days, carType, insurance = false) => {//declare arrow function
    let rates = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };
    let cost = rates[carType] * days;//rates
    if (insurance) {
        cost += 20 * days;
    }
    return `Total Rental Cost: $${cost}`;//return  value
};
console.log(calculateRentalCost(3, "Economy", true));//log
console.log(calculateRentalCost(5, "Luxury", false));

//Task 5-Returning Values
let calculateLoanPayment = (principal, rate, time) => {//declare arrow function
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;//return value
};
console.log(calculateLoanPayment(1000, 0.05, 2));//log
console.log(calculateLoanPayment(5000, 0.07, 3));

//Task 6-Higher-Order Functions
let filterLargeTransactions = (transactions, filterFunction) => {//declare function
    return transactions.filter(filterFunction);//return value
};
let transactions = [200, 1500, 3200, 800, 2500];//transaction list
console.log(filterLargeTransactions(transactions, amount => amount > 1000));

//Task 7- Closures
let createCartTracker = () => {//declare arrow function
    let total = 0;
    return (amount) => {//return value
        total += amount;
        return `Total Cart Value: $${total}`;
    };
};
let cart = createCartTracker();
console.log(cart(20)); //log
console.log(cart(35));