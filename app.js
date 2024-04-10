//key= 4013af668c12db87bcb8cfb6794db2d8
 
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi ={
    key: "4013af668c12db87bcb8cfb6794db2d8",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}   

const searchInputBox = document.getElementById('input-box');

//Event Listener Function on keypress
 searchInputBox.addEventListener('keypress',(event) =>{
       
    if(event.keyCode==13){
        console.log(searchInputBox.value);
        getweatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
 });

 //Get weather Report 
 function getweatherReport(city){
     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather=>{
         return weather.json();
     }).then(showWeatherReport);
 }
 // show Weather Report
 function showWeatherReport(weather){
     console.log(weather);

     let city = document.getElementById('city');
      city.innerText=`${weather.name},${weather.sys.country}`;

      let temperatue= document.getElementById('temp');
      temperatue.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

      let minMaxTemp=document.getElementById('min-max');
      minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

      let weatherType = document.getElementById('weather');
      weatherType.innerHTML=`${weather.weather[0].main}`;

      let date=document.getElementById('date');
    let todayDate =new Date();
    date.innerText= dateManage(todayDate);

    if(weatherType.textContent=='Clear'){
      document.body.style.backgroundImage= "url(clear.jpg.jpg)";
    }
    else if(weatherType.textContent== 'Clouds'){
        document.body.style.backgroundImage="url(air-2241569_1920.jpg)";
    }
    else if(weatherType.textContent== 'Haze'){
        document.body.style.backgroundImage="url(air-2241569_1920.jpg)";
    }
    
    else if(weatherType.textContent== 'Rain'){
        document.body.style.backgroundImage="url(rain-863339_1920.jpg)";
    }
    else if(weatherType.textContent== 'Snow'){
        document.body.style.backgroundImage="url(winter-1861704_1920.jpg)";
    }
    else if(weatherType.textContent== 'Thunderstrom'){
        document.body.style.backgroundImage="url(thunderstorm-3625405_1920.jpg)";
    }
 }
 // Date manage
 function dateManage(dateArg){

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];

    let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year= dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date= dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

 }