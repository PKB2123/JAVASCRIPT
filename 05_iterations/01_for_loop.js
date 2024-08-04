// ForLoop -->

for (let index = 0; index <= 10.; index++) {
    const element = index;
    if (element==7) {
        // console.log("7 is lucky number");
        
    }
//    console.log(element);
    
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and Outer loop: ${i}`);
        // console.log(i + '*' + j + '=' +i*j);
        
    }
    
    
}


let myArray= ['Superman', 'Batman', 'Ironman', 'Hulk', 'Thor']
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


// Break and Continue in loops -->

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is detected");
        break
        
    }
   console.log(`Value of i : ${i}`);
   
    
}
for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is detected");
        continue
        
    }
   console.log(`Value of i : ${i}`);
   
    
}