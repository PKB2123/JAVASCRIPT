//++++++++++++++++ Dates ++++++++++++++++++

let date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(typeof date);

let myDate= new Date(2023, 0, 25)
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNewDate= new Date(2023, 0, 23, 5, 9)
console.log(myNewDate.toLocaleString());

//let newDate= new Date("2023-01-12")
let new1Date= new Date("01-14-2023")
console.log(new1Date.toLocaleString());


//+++++++++++++++++ Time ++++++++++++++++++++++

let myTime= Date.now()
console.log(myTime);
console.log(new1Date.getTime());
console.log(Math.floor(Date.now()/1000));

let new2Date= new Date()
console.log(new2Date);
console.log(new2Date.getMonth() +1);
console.log(new2Date.getDay());


new2Date.toLocaleString('default',{
        
    weekday:'long'
})
