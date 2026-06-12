let student1="Shivani";
let student2="Arpita";
let students=["Shivani","Arpita"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students.length);
console.log(students[0][0]); //Accessing the first character of the first element in the array

//arrays are mutable
let fruits=["Apple","Banana","Orange"];
fruits[1]="Mango"; //Modifying the second element of the array
console.log(fruits);

//array methods
fruits.push("Grapes"); //Adds an element to the end of the array
console.log(fruits);

fruits.pop(); //Removes the last element of the array
console.log(fruits);

fruits.unshift("Strawberry"); //Adds an element to the beginning of the array
console.log(fruits);

fruits.shift(); //Removes the first element of the array
console.log(fruits);



fruits.indexOf("Orange"); //Returns the index of the first occurrence of "Orange"
console.log(fruits.indexOf("Orange"));
fruits.includes("Banana"); //Checks if "Banana" is present in the array
console.log(fruits.includes("Banana"));


fruit.indexOf("Grapes"); //Returns -1 if "Grapes" is not found in the array
console.log(fruits.indexOf("Grapes"));

//Practice question
let start=['January','june','march','august'];
start.shift(); //Removes the first element of the array
start.unshift('July'); //Adds 'July' to the beginning of the array
console.log(start);

//sort method in arrays
let cars=["BMW","Audi","Mercedes"];
cars.sort();
console.log(cars);
//we will only use ethis method id any string or character will be there in an array and we want to sort it in alphabetical order. It will not work for numbers. For sorting numbers as it will first convert it into a string and then give its value which will be a random one.


//constant arrays
const arr1=[1,2,3];
arr1.push(4);
console.log(arr1); //Output: [1, 2, 3, 4]
arr1[0]=0;
console.log(arr1); //Output: [0, 2, 3, 4]

//multidimensional arrays
let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums[0][1]); //Accessing the second element of the first array
console.log(nums[1][0]); //Accessing the first element of the second array

//End of file
