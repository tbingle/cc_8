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

