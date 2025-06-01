let todoList=[];

function addTodo(){
    let inputElement=document.querySelector("#input-text");
    let inputItem=inputElement.value;
    todoList.push(inputItem)
    inputElement.value="";
    displayTodo();
}

function displayTodo(){
    let containerElement=document.querySelector(".item-container");
    let newHtml="";
    for(let i=0;i<todoList.length;i++){
        newHtml+=`
            <div>
            <span>${todoList[i]}</span>
            <button onclick="todoList.splice(${i},1); displayTodo();">Delete</button>
            </div>
            `  
    }
    containerElement.innerHTML=newHtml;
}