const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c009b8a7673094dcc5e97c71bb8342e8"
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c009b8a7673094dcc5e97c71bb8342e8"
var date = new Date
var nameDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

fetch(weatherApiUrl).then(response => {
    if(response.ok){
        return  response.json()
    }
    
}).then(jsObject => {
    if(document.URL.includes("samdevbeltran.github.io/weather/api-test.html")){

        document.getElementById("current-temp").textContent = jsObject.list[0].main["temp"]
        const imagesrc = "https://openweathermap.org/img/wn/" + jsObject.list[0].weather[0].icon + ".png"
        const desc = jsObject.list[0].weather[0].description

        document.getElementById("imagesrc").textContent = imagesrc
        document.getElementById("icon").setAttribute("alt", desc)
        document.getElementById("icon").setAttribute("src", imagesrc)

    }
    if(document.URL.includes("samdevbeltran.github.io/weather/lesson5/preston-5.html")){
        document.getElementById("currentWeather").textContent = jsObject.weather[0].main
        document.getElementById("high_temp").textContent = jsObject.main["temp_max"]
        document.getElementById("humidity").textContent = jsObject.main["humidity"]
        document.getElementById("wind_speed").textContent = jsObject.wind["speed"]
        
        let foreDays  = document.querySelectorAll(".forecast div .foreDay")
        let foreIcons  = document.querySelectorAll(".forecast div .foreIcon")
        let foreTemps  = document.querySelectorAll(".forecast div .foreTemp")

        let nextDay = date.getDay() + 1

        fetch(forecastApiUrl).then(response => {if(response.ok){return response.json()}}).then(forecastObj =>{
            console.log(forecastObj)
            for (let index = 0; index < 5; index++) {

                if(nextDay > nameDays.length - 1)nextDay = 0
                if(foreDays[index] != undefined) foreDays[index].textContent = nameDays[nextDay]
                let srcImgFore = "https://openweathermap.org/img/wn/" + forecastObj["list"][index].weather[0].icon + ".png"
                foreIcons[index].src = srcImgFore
                foreTemps[index].textContent = forecastObj["list"][index].main["temp"]
                nextDay++
                
            }
    
        })

    } 

})

