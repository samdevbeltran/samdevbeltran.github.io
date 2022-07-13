function toggle_open(){
    document.getElementById("primaryNav").classList.toggle("open");
}
date_var = document.getElementsByTagName("footer")[0].getElementsByTagName("span")[0]
d = new Date()
currentDay = d.getDay()

if(currentDay == 5){
    document.querySelector(".fri-banner").classList.remove("hidden")    
}
date_var.innerHTML = d
btn = document.getElementById("hamburgerBtn")
btn.onclick = toggle_open