
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


const API_KEY ='5108cbfd28af500f73626a15d80ce50e';
function onGeoOk(position){  // position은 user의 위치 전달 parameter
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  // openweather Current API
  // console.log('I live in',lat,lon);
    //   console.log(position); 
    fetch(URL).then(response => response.json())
                .then(data => {  // fetch의 기능은 단순하지 않음 백엔드에서 주로 활용
        const city =document.querySelector('#weather span:first-child');
        const weather =document.querySelector('#weather span:nth-child(2)');
        const temperature =document.querySelector('#weather span:last-child');

        city.innerText =data.name;
        weather.innerText =data.weather[0].main;
        temperature.innerText =data.main.temp+'°C';

    });
}

function onGeoError(){
    alert('I want to know your loacation');
}



