const myName="Prabal"
const myCgpa=7
console.log(`My name is ${myName} and my CGPA is ${myCgpa}.`);


const myCollege= new String('FIEM-GARIA-KOLKATA')

console.log(myCollege);
console.log(myCollege[0]);
console.log(myCollege.__proto__);

console.log(myCollege.length);
console.log(myCollege.toLowerCase());

console.log(myCollege.charAt(3));
console.log(myCollege.indexOf('I'));


const newStr=myCollege.substring(0, 4)
console.log(newStr);

const anotherStr=myCollege.slice(-9, 4)
console.log(anotherStr);

const anotherStrOne="    Prabal     "
console.log(anotherStrOne);
console.log(anotherStrOne.trim());

const url = "https://prabal.com//prabal%20bhunia"
console.log(url.replace('%20', '-'));
console.log(url.includes('prabal'));

console.log(myCollege.split('-'));