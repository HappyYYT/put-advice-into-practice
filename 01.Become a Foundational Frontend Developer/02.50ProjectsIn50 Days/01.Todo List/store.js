export function createTodoListStore(title, todo) {
  const todoList = {};
  todoList.title = title;
  todoList.todos = [{ todo, completed: false }];
  return todoList;
}

export function createTodoItemStore(todo) {
  const todoItem = {};
  todoItem.todo = todo;
  todoItem.completed = false;
  return todoItem;
}

export function completedTodoItemStore(key, target) {
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

export function deleteTodoItemStore(key, target) {
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

export function changeTodoOrderStore(arr, key) {
  if (arr && arr.length > 0) {
    const todoLists = JSON.parse(localStorage.getItem("todoLists"));
    todoLists.forEach((todoList) => {
      if (todoList.title === key) {
        todoList.todos.forEach((item) => {
          if (item.todo === arr[0][0]) {
            item.todo = arr[1][0];
            item.completed = arr[1][1].includes("completed");
          } else if (item.todo === arr[1][0]) {
            item.todo = arr[0][0];
            item.completed = arr[0][1].includes("completed");
          }
        });
      }
    });
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
  }
}
