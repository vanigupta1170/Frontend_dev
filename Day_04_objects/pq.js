//Q1. Generate a random dice roll (1 to 6)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll:", diceRoll);


//Q2. Create a car object and print the car's name
const car = {
    name: "Honda City",
    model: "2023",
    color: "White"
};

console.log("Car Name:", car.name);

//Q3. Create a Person object, update city, and add country
const person = {
    name: "John",
    age: 25,
    city: "Delhi"
};

// Update city
person.city = "New York";

// Add country
person.country = "United States";

console.log(person);