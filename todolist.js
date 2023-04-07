/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */
let inputList;
let addButton;
let finalList;
let todoList = [];

function loadHandler() {
  let inputList = document.getElementById("textBox");
  let addButton = document.getElementById("addItemButton");
  let finalList = document.getElementById("finalList");
  addButton.addEventListener("click", addNewItem);

  for (let inputValue of todoList) {
    const todoElement = document.createElement("li");
    todoElement.innerText = inputValue;
    finalList.appendChild(todoElement);
  }
}

function addNewItem() {
  let inputValue = document.getElementById("textBox").value;
  document.getElementById("finalList").innerHTML = inputValue;

  if (inputValue === "") {
    alert("Your textbox looks empty...");
  } else {
    todoList.push(inputValue);
    textBox.innerText = "";
  }
  console.log(todoList);
}

window.addEventListener("load", loadHandler);
