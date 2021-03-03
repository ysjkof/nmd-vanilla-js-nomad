const weather = document.querySelector(".js-weather");
const API_KEY = "9bfcde474d91feec9546f4935f03a475";
const COORDS = "coords";

// then 로딩을 기다림.
function getWeather(lat, lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
      return response.json()
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${place}의 현재 기온은 ${temperature}도`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj) )
}

// 좌표를 가져오는데 성공했을 때 함수.
function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude,
    // longitude: longitude; 키와 밸류가 동일할 때는 아래처럼 해도됨.
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function handleGeoError(){
  console.log("위치를 불러올 수 없습니다.");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();