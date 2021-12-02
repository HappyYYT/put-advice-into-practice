import { dateFormatter, getWeek } from "./utils.js";
import {
  createTodoListStore,
  createTodoItemStore,
  completedTodoItemStore,
  deleteTodoItemStore,
  changeTodoOrderStore,
} from "./store.js";
import {
  createTodoList,
  addTodo,
  completedTodo,
  removeTodo,
  changeTodoOrder,
} from "./node.js";
import { loadPolyfill } from "./polyfill.js";

function loadLists() {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  if (todoLists) {
    todoLists.forEach((todoList) => {
      createTodoList(todoList);
    });
  }
}

loadLists();

loadPolyfill();

// Enter your todo

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const todo = document.querySelector(".input-todo");
    if (todo.value.length > 0) {
      const date = new Date();
      const key = `${dateFormatter(date, "YYYY/MM/DD")} ${getWeek(date)}`;
      let todoLists = JSON.parse(localStorage.getItem("todoLists"));
      if (todoLists && todoLists.length !== 0) {
        const latestTodoList = todoLists[todoLists.length - 1];
        if (key === latestTodoList.title) {
          const todoItem = createTodoItemStore(todo.value);
          latestTodoList.todos.push(todoItem);
          todoLists[todoLists.length - 1] = latestTodoList;
          addTodo(
            todoItem,
            document
              .querySelector(".lists")
              .lastElementChild.querySelector("ul")
          );
        } else {
          const todoList = createTodoListStore(key, todo.value);
          todoLists.push(todoList);
          createTodoList(todoList);
        }
      } else {
        const todoList = createTodoListStore(key, todo.value);
        todoLists = [todoList];
        createTodoList(todoList);
      }
      localStorage.setItem("todoLists", JSON.stringify(todoLists));
      todo.value = "";
    }
  }
});

// Left click to toggle completed.
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo")) {
    completedTodo(e.target);
    const listNode = e.target.parentNode.parentNode;
    completedTodoItemStore(listNode.querySelector(".date").innerText, e.target);
  }
});

// Right click to delete todo.
document.addEventListener("contextmenu", (e) => {
  if (e.target.classList.contains("todo")) {
    const listNode = e.target.parentNode.parentNode;
    removeTodo(e.target);
    deleteTodoItemStore(
      listNode.querySelector(".date").innerText,
      e.target.innerText
    );
    if (!listNode.querySelector(".todo")) {
      listNode.remove();
    }
    e.preventDefault();
  }
});

// Drag and drop to change order.
let globalKey;
document.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("data", [e.target.innerText, e.target.classList]);
  globalKey = e.target.parentNode.parentNode.querySelector("h3").innerText;
  console.log(globalKey, "globalKey");
  if (e.target.classList.contains("todo")) {
    e.target.classList.add("drag");
  }
});

document.addEventListener("dragend", (e) => {
  const curKey = e.target.parentNode.parentNode.querySelector("h3").innerText;
  if (e.target.classList.contains("todo") && curKey === globalKey) {
    e.target.classList.remove("drag");
  }
});

document.addEventListener("dragover", (e) => {
  const curKey = e.target.parentNode.parentNode.querySelector("h3").innerText; // TODO:Uncaught TypeError: Cannot read properties of null (reading 'innerText')
  if (e.target.classList.contains("todo") && curKey === globalKey) {
    e.dataTransfer.dropEffect = "move";
  } else {
    e.dataTransfer.dropEffect = "none";
  }
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  const curKey = e.target.parentNode.parentNode.querySelector("h3").innerText;
  if (e.target.classList.contains("todo") && curKey === globalKey) {
    const storeArr = changeTodoOrder(e.dataTransfer.getData("data"), e.target);
    changeTodoOrderStore(storeArr, globalKey);
    // e.target.classList.remove("drag");
  }
});

document.addEventListener("dragenter", (e) => {
  const curKey = e.target.parentNode.parentNode.querySelector("h3").innerText; // TODO:Uncaught TypeError: Cannot read properties of null (reading 'innerText')
  if (e.target.classList.contains("todo") && curKey === globalKey) {
    e.target.classList.add("drag");
  }
});

document.addEventListener("dragleave", (e) => {
  const curKey = e.target.parentNode.parentNode.querySelector("h3").innerText; // TODO:Uncaught TypeError: Cannot read properties of null (reading 'innerText')
  if (e.target.classList.contains("todo") && curKey === globalKey) {
    e.target.classList.remove("drag");
  }
});
