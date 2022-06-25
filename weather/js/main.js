function toggle_open(){
    document.getElementById("primaryNav").classList.toggle("open");
}
date_var = document.getElementsByTagName("footer")[0].getElementsByTagName("span")[0]
date_var.innerHTML = new Date()
btn = document.getElementById("hamburgerBtn")
btn.onclick = toggle_open