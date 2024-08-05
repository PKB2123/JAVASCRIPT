const myNumbers= [1,5,4,7,9,2,10,3,6,8]
const newNum=myNumbers.map((num)=> num+10 )
//console.log(newNum);


// Chaining --->

const myNumbers2= [1,5,4,7,9,2,10,3,6,8]
const newNum2=myNumbers2
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num>=40)
console.log(newNum2);
