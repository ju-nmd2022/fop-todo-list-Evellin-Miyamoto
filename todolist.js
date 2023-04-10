/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Got help from my husband with the planning, to structure the ideas before coding.

// Variables and array
let addButton;
let finalList;
//Creating array to store the list of items to be done
let todoList = [];
//Creating array to store the items already done
let doneList = [];

// Load handler learned from the class
function loadHandler() {
  getItemsFromJson();
  let addButton = document.getElementById("addItemButton");
  addButton.addEventListener("click", addNewItem);
}

//get items saved on the local storage
/*Consulted some websites
https://stackoverflow.com/questions/72556032/localstorage-for-saving-tasks-of-to-do-list
https://freshman.tech/todo-list/
and got help from my husband to understand*/
function getItemsFromJson() {
  const jsonTodoItems = localStorage.getItem("todoList");
  const jsonDone = localStorage.getItem("doneList");

  if (jsonDone) {
    //translating the item from JSON to JS
    let conversionItemDone = JSON.parse(jsonDone);
    for (let item in conversionItemDone) {
      doneList.push(conversionItemDone[item]);
    }
  }

  if (jsonTodoItems) {
    let conversionTodoItems = JSON.parse(jsonTodoItems);
    for (let item in conversionTodoItems) {
      todoList.push(conversionTodoItems[item]);
    }
  }
  //Process to create elements for the list
  finalList = document.getElementById("finalList");

  for (let savedItem in todoList) {
    const todoElement = document.createElement("li");
    const spanElement = document.createElement("span");
    spanElement.innerText = todoList[savedItem];
    todoElement.appendChild(spanElement);
    finalList.appendChild(todoElement);

    if (doneList.includes(spanElement.innerText)) {
      todoElement.style.textDecoration = "line-through";
    }
    // Creating the done button
    const doneElement = document.createElement("button");
    doneElement.innerText = "✅";
    todoElement.appendChild(doneElement);
    doneElement.classList.add("doneElement");
    doneElement.addEventListener("click", () => {
      //This only adds the items that are not already in the doneList array to avoid duplicates
      // Not reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
      // includes reference - https://www.w3schools.com/jsref/jsref_includes_array.asp
      if (!doneList.includes(spanElement.innerText)) {
        doneList.push(spanElement.innerText);
        todoElement.style.textDecoration = "line-through";
        localStorage.setItem("doneList", JSON.stringify(doneList));
      }
    });

    // Creating the delete button
    const deleteElement = document.createElement("button");
    deleteElement.innerText = " ❌";
    deleteElement.classList.add("deleteElement");
    todoElement.appendChild(deleteElement);
    deleteElement.addEventListener("click", deleteTask);
  }
}

// Function to add a new item
function addNewItem() {
  let inputValue = document.getElementById("textBox").value;
  let finalList = document.getElementById("finalList");
  //creating list
  const todoElement = document.createElement("li");

  const spanElement = document.createElement("span");
  spanElement.innerText = inputValue;
  todoElement.appendChild(spanElement);

  // To make the input blank after adding to the list
  document.getElementById("textBox").value = "";

  // Creating the done button
  const doneElement = document.createElement("button");
  doneElement.innerText = "✅";
  todoElement.appendChild(doneElement);
  doneElement.classList.add("doneElement");
  doneElement.addEventListener("click", () => {
    if (!doneList.includes(spanElement.innerText)) {
      doneList.push(spanElement.innerText);
      todoElement.style.textDecoration = "line-through";
      localStorage.setItem("doneList", JSON.stringify(doneList));
    }
  });

  // Creating the delete button
  const deleteElement = document.createElement("button");
  deleteElement.innerText = " ❌";
  deleteElement.classList.add("deleteElement");
  todoElement.appendChild(deleteElement);
  deleteElement.addEventListener("click", deleteTask);

  //if conditions to add or not something to the list
  if (inputValue === "") {
    alert("Your textbox looks empty...");
  } else {
    todoList.push(inputValue);
    //had to put in here otherwise it was adding blank task
    finalList.appendChild(todoElement);

    textBox.innerText = "";
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
}
// Delete task based on Garrit's class fruit shop
function deleteTask() {
  const element = this.parentNode;
  const todoElement = element.querySelector("span");
  const task = todoElement.innerText;

  //Delete item from array todoList
  const taskIndex = todoList.indexOf(task);
  todoList.splice(taskIndex, 1);

  //Delete item from array doneList
  const doneIndex = doneList.indexOf(task);
  doneList.splice(doneIndex, 1);

  element.parentNode.removeChild(element);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("doneList", JSON.stringify(doneList));
}

window.addEventListener("load", loadHandler);
