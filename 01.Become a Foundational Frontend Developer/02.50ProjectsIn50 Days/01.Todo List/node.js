export function createTodoList(todoList) {
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

export function addTodo(item, parentNode) {
  const li = document.createElement("li");
  const classNames = item.completed ? "todo completed" : "todo";
  li.setAttribute("class", classNames);
  li.innerText = item.todo;
  li.draggable = true;
  parentNode.append(li);
}

export function completedTodo(target) {
  target.classList.toggle("completed");
}

export function removeTodo(target) {
  target.remove();
}

export function changeTodoOrder(prevData, curNode) {
  const prevDataArr = prevData.split(",");
  const curContent = curNode.innerText;
  if (prevDataArr[0] === curContent) return;
  const curClassList = curNode.classList.value;
  const prevNode = Array.from(curNode.parentNode.children).filter(
    (n) => n.innerText === prevDataArr[0]
  )[0];
  prevNode.innerText = curContent;
  prevNode.classList = curClassList;
  curNode.innerText = prevDataArr[0];
  curNode.classList = prevDataArr[1];
  return [prevDataArr, [curContent, curClassList]];
}
