loadLists();

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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo")) {
    completedTodo(e.target);
    const listNode = e.target.parentNode.parentNode;
    completedTodoItemStore(listNode.querySelector(".date").innerText, e.target);
  }
});

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

function createTodoItemStore(todo) {
  const todoItem = {};
  todoItem.todo = todo;
  todoItem.completed = false;
  return todoItem;
}

function deleteTodoItemStore(key, target) {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  todoLists.forEach((todoList, i) => {
    if (todoList.title === key) {
      todoList.todos.forEach((item, i) => {
        if (item.todo === target) todoList.todos.splice(i, 1);
      });
      if (todoList.todos.length === 0) {
        todoLists.splice(i, 1);
      }
    }
  });
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

function createTodoListStore(title, todo) {
  const todoList = {};
  todoList.title = title;
  todoList.todos = [{ todo, completed: false }];
  return todoList;
}

function completedTodoItemStore(key, target) {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  todoLists.forEach((todoList) => {
    if (todoList.title === key) {
      todoList.todos.forEach((item) => {
        if (item.todo === target.innerText) {
          if (target.classList.contains("completed")) {
            item.completed = true;
          } else {
            item.completed = false;
          }
        }
      });
    }
  });
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

function completedTodo(target) {
  target.classList.toggle("completed");
}

function removeTodo(target) {
  target.remove();
}

function getWeek(date) {
  const weekArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekArr[date.getDay() - 1];
}

function dateFormatter(date, format) {
  const formatMap = {
    YYYY: (date) => date.getFullYear(),
    MM: (date) => date.getMonth() + 1,
    DD: (date) => date.getDate(),
  };
  Object.keys(formatMap).forEach((formatKey) => {
    format = format.replaceAll(formatKey, formatMap[formatKey](date));
  });
  return format;
}

function loadLists() {
  const todoLists = JSON.parse(localStorage.getItem("todoLists"));
  if (todoLists) {
    todoLists.forEach((todoList) => {
      createTodoList(todoList);
    });
  }
}

function createTodoList(todoList) {
  const parentNode = document.querySelector(".lists");
  const div = document.createElement("div");
  div.setAttribute("class", "list");
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "date");
  h3.innerText = todoList.title;
  div.append(h3);
  const ul = document.createElement("ul");
  todoList.todos.forEach((item) => addTodo(item, ul));
  div.append(ul);
  parentNode.append(div);
}

function addTodo(item, parentNode) {
  const li = document.createElement("li");
  const classNames = item.completed ? "todo completed" : "todo";
  li.setAttribute("class", classNames);
  li.innerText = item.todo;
  parentNode.append(li);
}
