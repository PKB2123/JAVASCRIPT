const user={
    username:"Prabal",
    price:999,
    
    welcome:function(){
        console.log(`${this.username}, welcome our website`);
    }
   



    
}

user.welcome()



// function userTwo(){
//     let userName="Prabal"
//     console.log(this.userName);
// }

// userTwo()


// const userTwo=function(){
//     let userName="Prabal"
//     console.log(this.userName);
// }

// userTwo()



// const userTwo=() =>{
//     let userName="Prabal"
//     console.log(this.userName);
// }

// userTwo()


// const addTwo=(num1,num2)=>{
//     return num1+num2

// }

// const addTwo=(num1,num2) => num1+num2

// const addTwo=(num1,num2) => (num1+num2)

const addTwo=(num1,num2) => ({username:"Prabal"})

console.log(addTwo(14, 8));


