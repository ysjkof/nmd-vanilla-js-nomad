const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // form의 기본동작은 입력하고 엔터하면 어딘가로 보낸다. 이걸 막는다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕 ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }

}
// localStorage에서 USER_LS을 가져온다. 그리고 그 값이 null이 아니면 paintGreeting실행해서 값을 표현함.

function init(){
    loadName();
}

init();