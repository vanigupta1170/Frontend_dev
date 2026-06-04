// //program 1
// let elements=[2,4,5,6,7,8,9,10,6,12,67,6];
// console.log("elements in the array");
// console.log(elements);
// num=6;
// for(let i=0;i<elements.length;i++){
//     if(elements[i]===num){
//         elements.splice(i,1);
//     }
// }
// console.log("elements in the array after removing 6");
// console.log(elements);





//Program 2
// let number=prompt("Enter a number");
// if(isNaN(number)){
//     console.log("Please enter a valid number!!...");
// }
// else{
//     count=number.length;
// console.log("number of digits in the number is "+count);
// }




//Program 3

let num=prompt("Enter a number");
let sum=0;
while(num>0){
    let digit=num%10;
    sum=sum+digit;
    num=Math.floor(num / 10);
}
console.log("sum of the digits in the number is "+sum);


//program 4(Factorial of a number)
let number=prompt("Enter a number");
let factorial=1;
for(let i=1;i<=number;i++){
    factorial=factorial*i;
}
console.log("factorial of the number is "+factorial);