let todoList=[];

function addTodo(){
    let inputElement=document.querySelector("#input-text");
    let dateElement=document.querySelector("#input-date");
    let inputItem=inputElement.value;
    let inputDate=dateElement.value;
    todoList.push({item:inputItem,date:inputDate});
    inputElement.value="";
    dateElement.value="";
    displayTodo();
}

function displayTodo(){
    let containerElement=document.querySelector(".item-container");
    let newHtml="";
    for(let i=0;i<todoList.length;i++){
        newHtml+=`
            <span>${todoList[i].item}</span>
            <span>${todoList[i].date}</span>
            <button class="btn-delete button" onclick="todoList.splice(${i},1); displayTodo();">Delete</button>
            `  
    }
    containerElement.innerHTML=newHtml;
}