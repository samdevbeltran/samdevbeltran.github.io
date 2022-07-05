const images = document.querySelectorAll("[data-src]");
//console.log(images[0].getAttribute("data-src"))

function preLoadImg(img){
    let src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    img.src = src
    img.removeAttribute("data-src")
}

const intersectionObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            preLoadImg(entry.target)
            intersectionObserver.unobserve(entry.target)
        }else{
            return;
        }
    })
});

images.forEach((img) => {
    intersectionObserver.observe(img)
})