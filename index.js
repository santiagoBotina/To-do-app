//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

//Functions

//Add items
function addTodo(event) {
  //Prevent form form submitting
  event.preventDefault();
  //Creating todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Creating LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //After below's code, the buttons and the li are appended to the div, BUT the Div isn't appended to anything, so we may append the DIV to the ul so we can create it in the same container
  todoList.appendChild(todoDiv);
  //Clear todo input value
  todoInput.value = "";
}

//Check or delete item

function checkDelete(e) {
  const item = e.target;

  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  //CheckMark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
