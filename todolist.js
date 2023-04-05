/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

let todoList = [];
function clickHandler() {
  const inputList = document.getElementById("inputList");
  const addButton = document.getElementById("addItemButton");
  const inputValue = inputList.value;

  todoElement.innerText = inputValue;
}

function loadHandler() {
  const addButton = document.getElementById("addItemButton");
  addButton.addEventListener("click", clickHandler);
}
window.addEventListener("load", loadHandler);
