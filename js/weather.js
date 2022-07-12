const API_KEY = "952768a22eb8ff679a3bd8b2dc03d8d8";

// https://openweathermap.org/

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp}`; 
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 브라우저에서 위치 좌표값을 주는 함수
// 실행이 잘될경우 와 에러가 날 경우 실행할 두가지 함수가 필요함