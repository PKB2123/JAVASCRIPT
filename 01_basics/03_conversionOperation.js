let score=33
console.log(typeof score);
console.log(typeof (score));

let score2="33abcd"
let valueInNumber=Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// 33=>33
// 33abc=>Nan
// true => 1; false=>0


let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=>true; 0=>false
// ""=>false
// "prabal"=>true