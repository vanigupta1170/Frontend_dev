let todo=[];
let req=prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting!");
        break;
    }
    else if(req==="list"){
        console.log("--------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req==="add"){
        let task=prompt("enter new task");
        todo.push(task);
        console.log("Task added");
    }
    else if(req==="delete"){
        let index=prompt("enter index of task to delete");
        todo.splice(index,1);
        console.log("Task deleted");
    }
    else{
        console.log("Unknown request");
    }
    
    req=prompt("please enter your request");
}