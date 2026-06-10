const student={
    name: "Shibani",
    age:22,
    eng:89,
    math:97,
    phy:99,
    get avg() {
        console.log(this);
        let avg=(this.eng+ this.math + this.phy)/ 3;
        console.log(avg);
    }
}

//try and catch block
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);

// }catch{
//     console.log("Caught error.....a is not defined");
//     console.log(err); 
// }
// console.log("Hello2");
// console.log("Hello2");

//Arrow function

const sum = (a,b) => {
    console.log(a+b)
}

const pow = (a, b) => {
    return a**b;
};

const cube = (n) => {
    return n*n*n;
};

const hello = () => {
    console.log("Hello World");
};

//implicit Function in Arrow Function
 const mul = (a,b) => a * b;

//Set timeout
console.log("Hi!!! There");
setTimeout ( () => {
    console.log ("Apna college");
}, 4000);

console.log("Welcome to");

//set interval

let id = console.log("Hi!!! There");
setInterval ( () => {
    console.log ("Apna college");
}, 2000);

console.log(id);
