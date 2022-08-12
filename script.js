// 'use strict';

// // Note: Imported variables,functions are not copies. They have same reference as exported

// // To import module write its name inside {}
// import {showBalance, accNumber, accTitle, pin} from './bankAccount.js';

// // To import as an object
// import * as account from './bankAccount.js'; // Now account object has all methods/properties defined in bankAccount.js

// // To import default modules (we can use any name)
// import deposit from './bankAccount.js';

// showBalance(); // Imported module from bankAccount.js
// console.log(accTitle, accNumber, pin); // Imported properties from bankAccount.js

// // By using object
// account.showBalance();
// console.log(account.accTitle);

// // Using default modules
// deposit(5000); // Default module
// account.showBalance();

///////////////////////////////////////////// NPM Modules
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
const Bakery = {
    cart: [
        {prduct: 'bread', quantity: 10},
        {prduct: 'pizza', quantity: 20},
    ],
    owner: {name: 'Faizan'},
}
// Now use Module to deep copy this object
const Bakery2 = cloneDeep(Bakery);
Bakery2.owner.name = 'Ali'; // Will not change in original because it is deep
console.log(Bakery);
console.log(Bakery2);




