const student ={
    name : "John",
    age : 20,
    grade : "25",
    city : "Delhi"
};

const items = {
    price: 100,
    discount: 60,
    color:["red", "blue", "green"],
};

//thread/twitter post
const post = {
    username: "@vanigupta",
    content: "My first post",
    likes: 100,
    reposts: 50,
    tags:["shivani","gupta"],
};

//We can create,update and delete properties of an object


//Object of objects
const classInfo = {
    Shivani: {
        age: 22,
        grade: "A+"
    },
    Rohan: {
        age: 21,
        grade: "A"
    },
    Anjali: {
        age: 23,
        grade: "A-"
    }
};



const class1 =[
    {
        name: "Shivani",
        age: 22,
        grade: "A+"
    },

    {
        name: "Rohan",
        age: 21,
        grade: "A"
    },

    {
        name: "Anjali",
        age: 23,
        grade: "A-"
    }
];


//Math object
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10


//RANDOM NUMBER GENERATOR
let num=Math.random();
num=num*10;//Get a number between 1 and 9
num=Math.floor(num);
num=num+1;//Get a number between 1 and 10
console.log(num);

console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10



//