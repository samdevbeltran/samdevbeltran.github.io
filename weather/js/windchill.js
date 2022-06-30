t = document.getElementById("high_temp").innerHTML
s = document.getElementById("wind_speed").innerHTML
w_c = document.getElementById("wind_chill")
function calculate_wind_chill(t,s){
    return (35.74 + (0.6215 * t)) - (35.75 * (s**0.16)) + (0.4275 * (t * (s**0.16)))
}

w_c.innerHTML = calculate_wind_chill(t,s).toFixed(2)