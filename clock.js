const clock = document.querySelector('#clock');


function getClock(){
const today =new Date();
    
const nowHours = String(today.getHours()).padStart(2,"0");  
// String.padStart(문자열길이,추가할 문자열) String길이가 2보다 작으면 String에 0붙이기
const nowMinutes = String(today.getMinutes()).padStart(2,"0");
const nowSeconds = String(today.getSeconds()).padStart(2,"0");

clock.innerText =`${nowHours} : ${nowMinutes} : ${nowSeconds}`;
}

getClock(); // 한번은 실행  실행안시키면 바로 실행 안되고 1초뒤에 실행됨
setInterval(getClock,1000);  // setInterval(함수, 밀리초) -> 함수를 밀리초마다 실행