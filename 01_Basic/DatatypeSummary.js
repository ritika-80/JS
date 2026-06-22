// Primitive....>

/* 7 types of primitive data types in JavaScript
 1. String
 2. Number
 3. Boolean
 4. Null
 5. Undefined
 6. Symbol (ES6)
 7. BigInt (ES2020)*/

 const score = 100; // number
    const scoreValue = 100.3;
    const isLoggedIn = false; // boolean
    const outsideTemp = null;

    let userEmail; // undefined
    const id = Symbol("123");
    const anotherId = Symbol("123");
    console.log(id === anotherId); // false
    
    //const bigNumber = 9007199254740991n;

 //Reference data type(non-primitive data type)

 /* 1. Object
 2. Array
 3. Function*/

 const heros = ["shaktiman","naagraj","doga"];
    const myObj = {
        name: "ritika",
        age: 22,
    };

  /*  const myFunc = function(){
        console.log("hello world");
    }
    console.log( typeof bigNumber)
    console.log(typeof heros);
    console.log(typeof myObj);
    console.log(typeof myFunc);
    console.log(typeof scoreValue);
    console.log(typeof isLoggedIn);
    console.log(typeof outsideTemp);

    //https://262.ecma-international.org/5.1/#sec-11.4.3
*/

    // stack(primitive data types) and heap(reference/ non-primitive data types) memory allocation in JavaScript

    myYouTubeVideo = "js tutorial"; // primitive data type stored in stack memory
    let anotherYouTubeVideo = myYouTubeVideo; // another variable is created in stack memory and value of myYouTubeVideo is copied to anotherYouTubeVideo
    anotherYouTubeVideo = "js tutorial part 2"; // value of anotherYouTubeVideo is changed but myYouTubeVideo is not affected because they are stored in different memory locations(stack memory)

    console.log(myYouTubeVideo); // js tutorial
    console.log(anotherYouTubeVideo); // js tutorial part 2

    let userOne ={
        email: "ritika@example.com",
        upi: "ritika@okicici",
    };

    let userTwo = userOne;

    userTwo.email = "ritika@google.com";

    console.log(userOne.email); 
    console.log(userTwo.email);