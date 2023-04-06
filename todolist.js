/* To Do List
Foundations of Programming - Jönköping University
Evellin Miyamoto */

// let inputList = document.getElementById("inputList");
// let addItemButton = document.getElementById("addItemButton");
// let finalList = document.getElementById("finalList");
// let todoList = [];

// for (let inputValue of todoList) {
//   const todoElement = document.createElement("li");
//   const inputValue = inputList.value;
//   todoElement.innerText = inputValue;
//   addItemButton.onclick = addNewItem;
//   todoElement.classList.add("todoItems");

//   finalList.appendChild(todoElement);
// }

// function addNewItem() {
//   finalList.appendChild(this);
// }

let todoList = [];
function clickHandler() {
  const inputList = document.getElementById("inputList");
  const addButton = document.getElementById("addItemButton");
  const inputValue = inputList.value;

  let itemElement = document.createElement("li");
  itemElement.classList.add("itemElement");
  itemElement.innerText = inputValue;
  finalList.appendChild(itemElement);

  let doneElement = document.createElement("button");
  doneElement.innerText = "✅";
  itemElement.appendChild(doneElement);

  let deleteElement = document.createElement("button");
  deleteElement.innerText = " ❌";
  deleteElement.classList.add("deleteElement");
  itemElement.appendChild(deleteElement);
}

function loadHandler() {
  const addButton = document.getElementById("addItemButton");
  addButton.addEventListener("click", clickHandler);
}
window.addEventListener("load", loadHandler);
