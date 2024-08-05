const myArray=[1,2,4,5]
//const initialValue=0;

// const sumOfNum = myArray.reduce( function(acumulator, currentValue) {
//     console.log(`acumulator: ${acumulator} and currentValue: ${currentValue}`);  

//     return acumulator+currentValue

// },0)


const sumOfNum=myArray.reduce( (acc, currVal) => acc+currVal,0)

console.log(sumOfNum);


// Example -->

const shopingCart=[

    {
        itemName:"Phone",
        price:11999
    },
    {
        itemName:"Laptop",
        price:50999
    },
    {
        itemName:"IPhone",
        price:55999
    },
    {
        itemName:"Dell",
        price:65999
    },
    {
        itemName:"Macbook",
        price:89999
    },
    {
        itemName:"Asus",
        price:19999
    },
    {
        itemName:"Lenovo",
        price:58999
    },
    {
        itemName:"Hp",
        price:48999
    },
    {
        itemName:"Vivo",
        price:15999
    }
]

const totalSell=shopingCart.reduce( (Totalprice, EachPrice) => Totalprice+EachPrice.price,0)
console.log(totalSell);

