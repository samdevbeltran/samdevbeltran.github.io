window.addEventListener('load', function () {
    
    this.setTimeout(() => {
        const images = document.querySelectorAll("[data-src]");
        function preLoadImg(img){
            let src = img.getAttribute("data-src")
            if(!src){
                return;
            }else{
                img.src = src
                img.removeAttribute("data-src")
            }
            
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

    }, 200);
    
  })
  
