const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo) {}

const toDos = [];

function deleteToDo(event) {
  console.log("----------!----delete to do 시작");
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  console.log(toDos);
  const index = parseInt(li.id);
  toDos.splice(index, 1);
  console.log(toDos);
  saveToDos();
}

function saveToDos() {
  console.log("----------!----save to dos 시작");
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  console.log("----------!----paint To do 시작");
  console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  console.log("----------!----handle Submit 시작");
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 입력 후 인풋 창을 공란으로 만든다.
}

function loadToDos() {
  console.log("----------!----load To Dos 시작");
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
