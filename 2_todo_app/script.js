let todoList=[];

function addTodo(){
    let inputElement=document.querySelector("#input-text");
    let inputItem=inputElement.value;
    todoList.push(inputItem)
    inputElement.value="";
    displayTodo();
}

function displayTodo(){
    document.querySelector("#todo-items").innerText="";
    for(let i=0;i<todoList.length;i++){
        document.querySelector("#todo-items").innerText=document.querySelector("#todo-items").innerText+"\n"+todoList[i];
    }
}