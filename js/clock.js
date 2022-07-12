const time = document.querySelector("#date-time");
const clock = document.querySelector("#clock");

function startTime(){
    const date = new Date();
    clock.innerText = new Date().toLocaleTimeString(); // 사용자의 문화권에 맞는 시간표기법으로 시간을 리턴
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 00:00:1 의 방식으로 출력
    // const hours = String(date.getHours()).padStart(2, "0");  00:00:00 의 방식으로 출력
    // const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${hours}:${minutes}:${seconds}`;

    const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    const today = date.getDay();
    const todayLabel = week[today];
    time.innerText = `${todayLabel}`;
}

startTime();
setInterval(startTime, 1000);