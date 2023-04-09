/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// Got help from my husband with the planning, to structure the ideas before coding.

// Variables and array
let addButton;
let finalList;
let todoList = [];

// Load handler learned from the class
function loadHandler() {
  let addButton = document.getElementById("addItemButton");
  addButton.addEventListener("click", addNewItem);
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
    todoElement.style.textDecoration = "line-through";
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
  }
}

// Delete task based on Garrit's class fruit shop
function deleteTask() {
  const element = this.parentNode;
  const todoElement = element.querySelector("span");
  const task = todoElement.innerText;

  const taskIndex = todoList.indexOf(task);
  todoList.splice(taskIndex, 1);

  element.parentNode.removeChild(element);
}
window.addEventListener("load", loadHandler);
