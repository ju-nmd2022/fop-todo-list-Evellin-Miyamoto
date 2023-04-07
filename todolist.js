/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Variables and array
let addButton;
let finalList;
let todoList = [];

// Load handler learned from the class
function loadHandler() {
  let addButton = document.getElementById("addItemButton");
  addButton.addEventListener("click", addNewItem);
}

// function to add a new item
function addNewItem() {
  let inputValue = document.getElementById("textBox").value;
  let finalList = document.getElementById("finalList");
  //creating list
  const todoElement = document.createElement("li");
  todoElement.innerText = inputValue;
  // to make the input blank after adding to the list
  document.getElementById("textBox").value = "";

  //creating the done button
  const doneElement = document.createElement("button");
  doneElement.innerText = "✅";
  todoElement.appendChild(doneElement);
  doneElement.classList.add("doneElement");
  doneElement.addEventListener("click", () => {
    todoElement.style.textDecoration = "line-through";
  });

  //creating the delete button
  const deleteElement = document.createElement("button");
  deleteElement.innerText = " ❌";
  deleteElement.classList.add("deleteElement");
  todoElement.appendChild(deleteElement);
  deleteElement.addEventListener("click", deleteTask);
  console.log(this);

  //if conditions to add or not something to the list
  if (inputValue === "") {
    alert("Your textbox looks empty...");
  } else {
    todoList.push(inputValue);
    //had to put in here otherwise it was adding blank task
    finalList.appendChild(todoElement);
    textBox.innerText = "";
  }
  console.log(todoList);
}

function deleteTask() {
  const element = this.parentNode;
  const todoElement = element.querySelector("li");
  const task = todoElement.value;
  const taskIndex = todoList.indexOf(task);
  todoList.splice(taskIndex, 1);

  element.parentNode.removeChild(element);
}
window.addEventListener("load", loadHandler);
