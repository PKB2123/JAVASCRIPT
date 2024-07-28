// Imediately Invoked Function Expression

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

(function chai(){
    console.log(`DB CONNECTED`);
})();

(function chaior(){
    console.log(`DB CONNECTED TWO`);
})();

(() => {
    console.log(`DB CONNECTED THREE`);
})();

((name) => {
    console.log(`DB CONNECTED ${name}`);
})("FOUR")