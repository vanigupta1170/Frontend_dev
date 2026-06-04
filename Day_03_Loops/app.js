// for(let i=0; i<10; i++){
//     console.log(i);
// }

//print odd numbers from 1 to 20
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
    else{
        console.log(i+" is even number, please skip it");
    }
}

//print even numbers from 2 to 20
for(let i=2;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
    else{
        console.log(i+" is odd number, please skip it");
    }
}

//Guess your favorite movie
// let guess="Avatar";
// let userGuess=prompt("guess your favourite Movie");
// while((userGuess!=guess) && (userGuess!="quit")){
//     userGuess=prompt("Wrong guess, try again or type 'quit' to exit");

// }

// if(userGuess==guess){
//     console.log("Congratulations! You guessed it right.");
// }
// else if (userGuess=="quit"){
//     console.log("Better luck next time!");
// }

//break statement
for(let a=1;a<=10;a++){
    if(a==5){
        break;
    }
    console.log(a); 
}
console.log("We used break statement to exit the loop when a is equal to 5");

//Loop with arrays
let fruits=["apple","banana","orange","grape","litchi"];
for(let i=0;i<fruits.length;i+=2){
    console.log(i,fruits[i]);
}

//Nested loops with arrays
let heros=[["ironman","spiderman","thor"], 
["hulk","captain america",'wonder women']];
for(let i=0;i<heros.length;i++){
    console.log(heros[i],heros[i].length);
    for(let j=0;j<heros[i].length;j++){
        console.log(`j=${j} heros[i][j]`);
    }
}

//for of loop
let friends=["Alice","Bob","Charlie"];
for(let friend of friends){
    console.log(friend);
}