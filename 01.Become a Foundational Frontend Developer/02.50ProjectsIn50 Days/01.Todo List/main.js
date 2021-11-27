document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputEl = document.querySelector(".input-todo");
    if (inputEl.value.length > 0) {
      const parentNode = document.querySelector(".showcase").firstElementChild;
      createTodoList(parentNode, inputEl.value);
      inputEl.value = "";
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "item") {
    toggleItem(e.target);
  }
});

document.addEventListener("contextmenu", (e) => {
  const containerDiv = document.querySelector(".showcase").firstElementChild;
  const listDiv = containerDiv.lastElementChild;
  const ul = listDiv.lastElementChild;
  removeLastChild(ul, listDiv);
  e.preventDefault();
});

function removeLastChild(parentNode, listNode) {
  parentNode.removeChild(parentNode.lastElementChild);
  if (parentNode.lastElementChild === null) {
    listNode.parentNode.removeChild(listNode);
  }
}

function toggleItem(el) {
  if (el.style.textDecoration === "line-through") {
    el.style.textDecoration = "none";
  } else {
    el.style.textDecoration = "line-through";
  }
}

function createTodoList(parentNode, content) {
  const dataNodeList = document.querySelectorAll(".date");
  const len = dataNodeList.length;
  const title = `${getTodayDate()} ${getWeek()}`;
  if (len > 0) {
    const id = dataNodeList[len - 1].innerText;
    if (id === title) {
      createListItem(content, parentNode.lastElementChild.lastElementChild);
    } else {
      createNewList(title, content, parentNode);
    }
  } else {
    createNewList(title, content, parentNode);
  }
}

function createNewList(title, content, parentNode) {
  const div = document.createElement("div");
  div.setAttribute("class", "list");
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "date");
  h3.innerText = title;
  div.appendChild(h3);
  const ul = document.createElement("ul");
  createListItem(content, ul);
  div.appendChild(ul);
  parentNode.appendChild(div);
}

function createListItem(content, parentNode) {
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.innerText = content;
  parentNode.appendChild(li);
}

function getWeek() {
  const weekArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekArr[new Date().getDay() - 1];
}

function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}
