const btn = document.getElementById("show-weather")
const input = document.getElementById('zipcode')
let name = document.getElementById('city-name')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let weatherMain = document.getElementById('weather-main')
let weatherDesc = document.getElementById('weather-desc')
let windSpeed = document.getElementById('wind-speed')
let windDegree = document.getElementById('wind-degree')
let current = document.getElementById('temp-current')
let minimun = document.getElementById('temp-min')
let maximum = document.getElementById('temp-max')
let humid = document.getElementById('humidity')

btn.addEventListener('click', () => generateWeather())

function generateWeather() {
  /*  const config={
      headers:{
        'accept':'application/json'
      }
    }*/

  const zipcode = input.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=412bc730590c7e8754fafb621992db39`)
    .then((res) => res.json())
    .then((data) => {
    if(data.name==null){
      alert(data.message+" "+data.cod+" "+"boy zipcode not on service")
    }
    else{
    console.log(data)
      name.innerHTML = data.name
      latitude.innerHTML = data.coord.lat
      longitude.innerHTML = data.coord.lon
      weatherMain.innerHTML = data.weather[0].main
      weatherDesc.innerHTML = data.weather[0].description
      windSpeed.innerHTML = data.wind.speed
      windDegree.innerHTML = data.wind.deg
      current.innerHTML = data.main.temp
      minimun.innerHTML = data.main.temp_min
      maximum.innerHTML = data.main.temp_max
      humid.innerHTML = data.main.humidity
  }  })
}
