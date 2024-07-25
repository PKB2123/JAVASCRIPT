//+++++ Array +++++++

let myArr=[0,1,2,3,4,5]
console.log(myArr);
let heros=["Ironman","Dr.Strange","Hulk"]
console.log(heros);
let Arr2=new Array(5,9,7,8,10)
console.log(myArr[2]);

//+++++ ArrayMethod ++++++

myArr.push(8)
myArr.push(7)
myArr.pop()
  
myArr.unshift(12)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(8));

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);

// Slice,splice


console.log("A " ,myArr);

const mynA=myArr.slice(1,3)
console.log(mynA);

console.log("B ", myArr);

const mynA2=myArr.splice(1,3)
console.log(mynA2);
console.log("C ", myArr);




