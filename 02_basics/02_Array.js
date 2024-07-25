const marvel_hero=["Ironman","Thor","Captain America"]
const dc_hero=["Superman","Flash","Batman"]

marvel_hero.push(dc_hero)
console.log(marvel_hero);

// const new_hero=marvel_hero.concat(dc_hero)
// console.log(new_hero);

const allHeros=[...marvel_hero, ...dc_hero]
console.log(allHeros);

const anotherArr=[1,2,3,5,[6,7,8],9,[10,7,8,[12,4]]]
const anotherArr2=anotherArr.flat(Infinity)
console.log(anotherArr2);

console.log(Array.isArray("Prabal"));
console.log(Array.from("Prabal"));
console.log(Array.from({name:"Prabal"}));


let score1=100
let score2=200
let score3=500
let score4=1000

console.log(Array.of(score1, score2, score3, score4));
