function myName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("A");
    console.log("L");
}

// myName()

function addTwoNum(number1, number2){
    //let result=number1+number2
    //return result
    //console.log(number1+number2);
    return number1+number2
}
const rusult=addTwoNum(6, 5)
//console.log("Result:",rusult);


function newUser(username="Sam"){
    if(!username){
        console.log("Please logged in");

    }
    return `${username} just logged In`
}
// console.log(newUser("Prabal"));

function calculateCartPrice(val1,val2,...num1){

     return num1
}

//console.log(calculateCartPrice(2,200, 300, 500));

const user={
    username:"prabal",
    price:"500"

}

function handleObject(Anyobject){
    console.log(`User is ${Anyobject.username} and price is ${Anyobject.price}`);
    
}
handleObject(user)

const myNewarray=[100, 200, 400, 500]

function returnSecondvalue(getArray){
    return getArray[3]
}
console.log(returnSecondvalue(myNewarray));