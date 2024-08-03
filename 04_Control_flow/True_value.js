const userEmail="pkb@gmail.com"
if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't get user Email");
    
}

// Falsy values -->
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values -->
    // "0", 'false', " ", [], {}, function(){}

const Array=[]
if (Array.length==0) {
    console.log("Array is empty");
    
}    

const Obj={}
if (Object.keys(Obj).length==0) {
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1=undefined ?? 30
val1= undefined ?? 20 ?? 60

console.log(val1);

// Terniary Operator -->
    // Condition ? true : false

const coldCoffee=150

coldCoffee<=80 ? console.log("Less than 80") : console.log("Greater than 80");


