//const tinderUser=new Object()

const tinderUser={}
tinderUser.id="01abcd"
tinderUser.name = "Prabal"
tinderUser.location = "Kolkata"
tinderUser.IsloggedIn = false

//console.log(tinderUser);
const regularUser = {

    Email:"pkb@gmail.com",
    fullname:{
        UserFullName:{
            FirstName:"Prabal",
            MiddleName: "Kanti",
            LastName:"Bhunia"
        }
    }
}
//console.log(regularUser.fullname.UserFullName.FirstName);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

//const obj3={obj1, obj2}

//const obj3=Object.assign({},obj1, obj2)

const obj3={...obj1, ...obj2}

//console.log(obj3);

const user=[
    {
        id:"01",
        Email:"P@gmail.com"
    },
    {
        id:"01",
        Email:"P@gmail.com"
    },
    {
        id:"01",
        Email:"P@gmail.com"
    },
    {
        id:"01",
        Email:"P@gmail.com"
    }
]

user[1].Email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsloggedIn'));


const course={
    courseName:"JavaScript",
    price:"599",
    courseInstructor:"Chai or Code"
}

//course.courseInstructor

const {courseInstructor:Instructor}=course

//log(courseInstructor);
console.log(Instructor);



