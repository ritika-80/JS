let score = "33abc"

/*console.log(typeof score);
console.log(score + 7); // string concatenation

console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber + 7); // addition

console.log(valueInNumber);

/* "33" = 33
"33abc" = NaN
boolean true = 1
boolean false = 0
null = 0
undefined = NaN
*/

let isLoggedIn = "true";
 let booleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn); // true

 isLoggedIn = "";
 booleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn); // false

isLoggedIn = "0";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

isLoggedIn = null;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // false

isLoggedIn = undefined;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // false