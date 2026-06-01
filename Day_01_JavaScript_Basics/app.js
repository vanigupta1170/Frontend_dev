//use of the console keyword

console.log('Hello World');
console.log('Welcome to the Github repository');
let a=23, b=45;
console.log('The sum of a and b is: ' + (a+b));

//Template literals
let pp=10;
let ep=20;
//Let output="the total price is:" +(pp+ep)+"rupees";
let output=`the total price is: ${pp+ep} rupees`;



//Arithmetic operators
let a=10, b=5;
console.log('The sum of a and b is: ' + (a+b));
console.log('The difference of a and b is: ' + (a-b));
console.log('The product of a and b is: ' + (a*b));
console.log('The quotient of a and b is: ' + (a/b));
console.log('Done with arithmetic operations');

//unary operators
let x=7,y=5;
console.log(x++); //post-increment
console.log(++x); //pre-increment

//comparison operator
let age=13;
console.log(age > 18); //false
console.log(age < 18); //true
console.log(age >= 18); //false
console.log(age <= 18); //true
console.log(age == 18); //false
console.log(age != 18); //true



//Conditonal if statements for traffic light
let light='red';
if(light === 'red') {
    console.log('Stop');
} if(light === 'yellow') {
    console.log('Get ready');
}  if(light === 'green') {
    console.log('Go');
}

//conditional else if statements
if(age<18){
    console.log("You cannot vote");
}
else if(age>=18){
    console.log("You can vote");
}
let price;
let size='L';
if(size === 'S') {
    price=50;
    console.log(`${price} Small size`);
}
if(size === 'M') {
    price=100;
    console.log(`${price} Medium size`);
}
if(size === 'L') {
    price=200;
    console.log(`${price} Large size`);
}
if(size === 'XL') {
    price=250;
    console.log(`${price} Extra Large size`);
}


//Logical operators
let marks=90;
if (marks >= 33 && marks <= 80) {
    console.log('pass');
    console.log('Grade: A++');
}

//A good String(A good string that starts with the letter 'a' & has a length>3.Write a program to find if it is agood string or not)
let str='apple';
if(str[0]==='a'&& str.length>3){
    console.log('It is a good string');
}
else{
    console.log('It is not a good string');
}
//Write a program to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit ,i.e.2
let num1=234,num2=2944;
if(num1%10===num2%10){
    console.log("The two numbers have the same last digit");
}
else{
    console.log("The two numbers do not have the same last digit");
}
