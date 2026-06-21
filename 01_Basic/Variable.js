const accountId = 123456789;
var accountEmail = "ritika@example.com";
let accountPassword = "myPassword";
accountCity = "Delhi";
accountCity = "bangalore";
// accountId = 987654321;  // not allowed to reassign a value to a constant variable
// console.log(accountId); not allowed to reassign a value to a constant variable

accountPassword = "newPassword"; // allowed to reassign a value to a variable declared with let

//console.log(accountPassword); // Output: newPassword

//console.log(accountCity); // Output: bangalore

//console.log([accountId, accountEmail, accountPassword, accountCity]); // Output: [123456789, "ritika@example.com", "newPassword", "bangalore"]

/* prefer not to use var for variable declaration as it has function scope and can lead to unexpected behavior due to hoisting. Instead, use let or const for block-scoped variables. */

/* prefer not to use var
because of issues of functional scope and block scope.*/
let accountState;
console.log(accountState); // Output: undefined