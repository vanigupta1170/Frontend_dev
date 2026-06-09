//Functions
 function hello() {
    console.log("hello");
}

hello();

function printName()
{
    console.log("Apna college");
    console.log("All the best");
}
printName();

function print1to5()
{
    for (let i=1;i<=5;i++){
        console.log(i)
    }
}

print1to5();

//Create a function that prints a poen
function printPoem()
{
    console.log("Twinkle Twinkle little star");
    console.log("How i wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");

}

printPoem();

//Create a Function to roll a dice and always display the value of the dice (1to6)

function randomNo()
{
    let rand= Math.floor(Math.random()*6)+1;
    console.log(rand);
}

randomNo();
randomNo();
randomNo(); 


//Function with argument
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Shivani",22);

//Create a function which gives average of three numbers
function avg (a,b,c){
    let d=(a+b+c)/3;
    console.log(`The average of the three numbers is ${d}`); 
}

avg(12,77,8);
avg(1,6,7);

//create a function that prints the multiplication table of a number
 function mulTable(n){
    for(let i=1;i<=10;i++){
        let j=n*i;
        console.log(`${n} * ${i} = ${j}`);
    }
 }

mulTable(8);


//return function
 
function su(a,b){
    return a+b;
}
let s=su(7,10);
console.log(s);


//Create a function that returns the sum of numbers from 1 to n.
function summ(n){
    let s=0;
    for(let i=1;i<=n;i++){
         s=s+i;
    }
    return (s);
}

console.log(summ(7));


//Create a Function that returns the concatenation of all strings in an array
let arr=["abc","def","ghi","jkl"];
function concat(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}
console.log(concat(arr));

//Global,Functional and lexical scope
let greet="hello";//Global Scope
function changeGreet(){
    let greet="namaste"; //Functional Scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);//Lexical Scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();


//Function Expression

let sum= function(a,b){
    return a+b;
}

sum(1,2);

//Higher order function

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}

multipleGreet(function() {console.log("namaste")},1000);




function oddorEvenFactory(request){
    if (request=="odd"){
        return function(n) {
            console.log(!(n%2==0))
    }
}else if(request=="even"){
    return function(n) {
        console.log((n%2==0))
}

}else{
    console.log("wrong input");
    }
}

let request="odd";//even
let func=oddorEvenFactory(request);

//arrow Function
const square = (n) => {
    return n*n;
}

console.log(square(5));

const cube = n => n*n*n;

console.log(cube(3));

//CallBack Function
function processUser(name, callback){
    console.log(`Processing user: ${name}`);
    callback();
}

function completed(){
    console.log("Task Completed");
}

processUser("Shivani", completed);