
const accTitle = "Muhammad Faizan";
const accNumber = "00112233445566778899"
const accPin = 1234;
let balance = 0;

// If we eant to export one module at a time, write export before that
export function showBalance() {
    console.log('Your Balance is Rs. ' + balance);
}

// If we want to export multiple modules
export {balance, accTitle, accNumber, accPin as pin};

// Default Export
// It is use to eexport any module without name so we can import it by any name in other modules
export default function(amount) {
    balance += amount;
    console.log(`Rs. ${amount} Deposited Successfully ...`);
}

////////////////////////////////////// Top Level await

// Use without async functions and stop execution of program before its completion
// Useful when we return something from function as promise (see example below)

// Without Top Level await
async function getDataFromAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}
const response1 = getDataFromAPI();
console.log(response1); // Promise Object

// Previous Version
const response2 = await getDataFromAPI();
console.log(response2); // Actual Data

////////////////////////////////////// Module Pattern
const Person = (function(){
    
    const name = "Faizan";
    const age = 22;
    const post = "Web Developer";

    function show() {
        console.log(`I am ${name}, A ${post}, aged ${age}`);
    }

    return {show};

})();
Person.show();


