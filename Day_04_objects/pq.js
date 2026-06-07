//Q4. Create a student object and print details
const student = {
    name: "Shivani",
    age: 21,
    course: "B.Tech",
    grade: "A"
};

console.log("Student Details:", student);

//Q5. Check if a property exists in an object
console.log("Does student have grade?", "grade" in student);

//Q6. Calculate area using an object
const rectangle = {
    length: 10,
    width: 5
};

let area = rectangle.length * rectangle.width;
console.log("Area of Rectangle:", area);

//Q7. Store multiple books in an array of objects
const books = [
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" }
];

console.log("First Book:", books[0].title);

//Q8. Create a product object and apply discount
const product = {
    name: "Laptop",
    price: 50000,
    discount: 10
};

let finalPrice = product.price - (product.price * product.discount / 100);

console.log("Final Price:", finalPrice);

//Q9. Generate a random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNum);

//Q10. Create an object representing a movie
const movie = {
    title: "Interstellar",
    rating: 9.0,
    year: 2014
};

console.log(`${movie.title} was released in ${movie.year}`);