const newTodoForm = document.querySelector("#firstSection");
const radioBtnSelect = document.querySelector("#divSecondSection");
const todoListForm = document.querySelector("#thirdSection");

/*

newTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit");
  let input = document.querySelector("#inputText");
  console.log(input.value);
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.innerText = " " + input.value;

  li.append(checkbox, label);
  const ul = todoListForm.querySelector("ul");
  ul.append(li);
});

*/

const state = {
  todos: [],
}

function updateLocalStorage() {
  const todosAsString = JSON.stringify(state.todos);
  localStorage.setItem("todos", todosAsString);
}

function loadDataFromLocalStorage() {
  if (localStorage.getItem("todos")) {
    const todosData = JSON.parse(localStorage.getItem("todos"));
    return todosData;
  } else {
    return [];
  }
}

state.todos = loadDataFromLocalStorage();


function todosElement(todosData) {
  const li = document.createElement("li");

  const elementInput = document.createElement("input");
  elementInput.type = "checkbox";

  const elementLabel = document.createElement("label");
  elementLabel.innerText = todosData.todos;

  li.append(elementInput, elementLabel);
  
  return li;
}

function render() {
  document,querySelector(#todoTaskList).innerHTML = "";
  for (todo of state.todos) {
    const ul = todoListForm.querySelector("ul");
    document.querySelector(#todoTaskList).appendChild(todosElement(todo));
    // 
  }
}

document.querySelector("#firstSection").addEventListener("submit", (event)=> {
  event.preventDefault();

  const todoInputEl = document.querySelector("#inputText");

  state.todos.push({
    id: +new Date()
    todos: todoInputEl.value;
  })
  
  updateLocalStorage();
  render();

  event.target.reset();
});

render();

// Radio Input !!

/* radioBtnSelect.addEventListener("click", (event) => {
  console.log("test RadioBtn");
}); */

/*
function selectAll() {
  if () { // wenn "open" or "done" checked sind 
      // beide unchecken
  }
}

function selectOpen() {
  if () { //  wenn "done" checked 
    // beide unchecken
    // "all" checken
  }
  else if () { //  wenn "all" checked ist 
    // "all" unchecken
  }
}

function selectDone() {
  if (/) { // wenn "open" checked 
    // beide unchecken
    // "all" checken
  }
  else if () { // wenn "all" checked ist
    // "all" unchecken
  }
}
*/
