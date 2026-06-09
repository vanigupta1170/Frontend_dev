//Function to add the maximum number
function findMax(a,b,c){
    let max = a;

    if(b > max){
        max = b;
    }

    if(c > max){
        max = c;
    }

    return max;
}

console.log(findMax(10,45,23));


//Recursive Function
function countdown(n){

    if(n === 0){
        console.log("Finished");
        return;
    }

    console.log(n);
    countdown(n-1);
}

countdown(5);

//Function to count Vowels
function countVowels(str){

    let count = 0;

    for(let char of str.toLowerCase()){

        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            count++;
        }
    }

    return count;
}

console.log(countVowels("Shivani"));
