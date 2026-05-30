//Trim method in strings
let msg = "      Hello         " ;
console.log(msg);
//After using trim method
console.log(msg.trim());

//UpperCase and LowerCase method in strings
let name="Shivani Gupta";
console.log(name.toUpperCase());
let name1="SHIVANI GUPTA";
console.log(name1.toLowerCase());


//String method with arguments
let str="Hello World";
console.log(str.indexOf("o"));
console.log(str.indexOf("o",5));
console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o",5));

//Method chaining
let mess="        Hello      ";
msg2=mess.trim().toUpperCase();
console.log(msg2);

let str1="ILoveCoding";
console.log(str1.slice(1,5));
console.log(str1.slice(-1))

//replace method in strings
let str2="I Love Coding";
console.log(str2.replace("Coding","JavaScript"));
console.log(str2.replace('o','x')); //only replaces the first occurrence
console.log(str2.replace(/o/g,'x')); //replaces all occurrences of 'o' with 'x'

//repeat method in strings
let str3="Hello";
console.log(str3.repeat(3)); //repeats the string 3 times




