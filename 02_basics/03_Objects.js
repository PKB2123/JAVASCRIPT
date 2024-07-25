//singleton
//Object.create

//  Object literals

const Symbol1=Symbol("Key1")

const JsUser={

    Name:"Prabal",
    "Full_name":"Prabal Kanti Bhunia",
    Age:22,
    [Symbol1]:"Mykey1",
    location:"West Bengal",
    Email:"prabal@gmail.com",
    IsloggedIn:false,
    Ph_No:7407253074
}

console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser["Full_name"]);
console.log(JsUser[Symbol1]);


JsUser.Email="pkb@gmail.com"

//Object.freeze(JsUser)
JsUser.Email="praba@google.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Guys");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Guys,${this.Name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

