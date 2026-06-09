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