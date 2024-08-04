// For of -->

let arr=[1,2,3,4,5,7,8,9,6]

for (const num of arr) {
    //console.log(num);
    
}

let string="hello world!"
for (const str of string) {
    // console.log(`result is: ${str}`);
    
}

// Map -->

const map=new Map()
map.set("IN","India")
map.set("USA","Uniited State of America")
map.set("FR","Franace")

for (const key of map) {
    // console.log(key);
    
}
for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}


const myObject={
    "Game1":"PUBG",
    "Game2":"FreeFire"
}

// for (const [key, value] of myObject) {
//     console.log(key, "-->", value);
    
// }