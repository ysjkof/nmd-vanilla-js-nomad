const COORDS = 'coords';


// 좌표를 가져오는데 성공했을 때 함수.
function handleGeoSucces(position){
  console.log(position);
}

function handleGeoError(){
  console.log("위치를 불러올 수 없습니다.");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
    askForCoords();
  } else {
    // getWeather
  }
}

function init(){
  loadCoords();
}

init();