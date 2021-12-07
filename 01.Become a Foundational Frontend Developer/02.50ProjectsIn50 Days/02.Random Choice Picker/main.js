document.addEventListener("keyup", (e) => {
  let choices;
  if (e.target.id === "enter-choices") {
    const parentNode = document.querySelector(".produce-choices");
    if (e.target.value.trim().length === 0) parentNode.innerHTML = "";
    if (e.target.value.trim().length > 0) {
      choices = e.target.value.split("+");

      parentNode.innerHTML = "";
      createTags(parentNode, choices);
    }
  }
  if (e.key === "Enter") {
    if (e.target.id === "enter-choices") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      randomSelect(choices);
    }
  }
});

loadListenForTab();

function selectItem(e) {
  removeBorder();
  removeShow();
  console.log(e.target);
  e.target.classList.add("selected");
  const tabContentItem = document.querySelector(`.${e.target.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  const tabItems = document.querySelectorAll(".tab");
  tabItems.forEach((item) => item.classList.remove("selected"));
}

function removeShow() {
  const tabContentItems = document.querySelectorAll(".content");
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

function loadListenForTab() {
  const tabItems = document.querySelectorAll(".tab");
  tabItems.forEach((item) =>
    item.addEventListener("click", selectItem)
  );
  // tabItems.forEach((item) =>
  //   item.addEventListener("click", function() {
  //     const _this = this;
  //     const e = {target:_this}
  //     selectItem(e);
  //   } )
}

document.querySelectorAll("tab").forEach((tab) => {
  tab.addEventListener("click", () => {});
});

function createTags(parentNode, choices) {
  choices.forEach((choice) => {
    const li = document.createElement("li");
    li.innerText = choice;
    parentNode.append(li);
  });
}

function randomSelect(choices) {
  const len = choices.length;
  const parentNode = document.querySelector(".produce-choices");
  if (len <= 0) return;
  if (len === 1) {
    highlightTag(parentNode.firstElementChild);
  }
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag(len);
    if (randomTag) {
      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag(len);
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag(num) {
  const tags = Array.from(document.querySelector(".produce-choices").children);
  const mul = getMul(num);
  const max = num;
  const random = Math.floor(Math.random() * mul) % max;
  return tags[random];
}

function highlightTag(tag) {
  tag.classList.add("selected");
}

function unHighlightTag(tag) {
  tag.classList.remove("selected");
}

function getMul(num) {
  let mul = 10;
  mul = 10 ** String(num).length;
  return mul;
}
