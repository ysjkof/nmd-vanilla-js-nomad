# java script study

title: Clond Coding
sub-title: 바닐라 JS로 크롬 앱 만들기
teacher: nomad coder

## process

1nd: make clock

- 시간, 분, 초가 나타나는 시계 표현.
- setInterval로 웹페이지에서 실시간으로 시간을 갱신.
- 한 자리 숫자 일때는 3항 연산자를 사용해서 두 자리수로 표현.
  - 11:5 -> 11:05
  - Conditional (ternary) operator

2nd:
local storage: 사용자 컴퓨터에 정보를 저장하는 작은 공간.
경로: 개발자 도구 -> Application -> Storage -> Local Storage
localStorage.setItem(ket,value);

input.value input에서 입력한 값을 얻는다.

3nd:
make user name.
make to Do List.

4nd:
make Delete:
HTML에서 삭제.

```
function aa(event){
  console.dir(event.target);
}

delBtn에 addEventListener("click", aa);
```

- console.dir에서 parentNode 경로를 알 수 있다. -> `console.dir(event.target.parentNode);`
- 강의에서 `filter`를 사용하지만 이해가 안되서 splice와 parseInt를 사용함.
  - parseInt: string을 number로 바꿔줌.

5nd:
make background images:

- `Math.floor()` 0~1까지 무작위 출력.
- `Math.foor(3.9)` 나머지를 버리고 출력함.
- `Math.ceil(3.9)` 나머지를 올리고 출력함.

6nd:
make weather
VSCode live server에서 웹을 열고 있으면 위치를 묻지도 않는다.
openweathermap API를 이용해서 날짜 정보를 받아 온다.
- adguard 실행 중에는 사파리에서 위치정보를 묻는 창이 안나온다.

7nd:

## syntax

localStorage.getItem(TODOS_LS) : 로컬 스토리지의 key값 TODOS_LS를 불러온다.
localStorage.setItem(TODOS_LS, a) : 로컬 스토리지의 key값 TODOS_LS에 a를 저장한다.

- 하지만 localStorage에는 string만 넣을 수 있다. JS의 data가 string이 아니라면 오류.
- 모든 데이터를 string으로 저장하고 불러오라.
- JS Obj를 string으로 바꾸는데 이때 `JSON.stringify`를 사용한다.
