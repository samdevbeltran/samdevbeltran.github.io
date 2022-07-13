if(document.URL.includes("samdevbeltran.github.io/weather/lesson5/index.html")){
    const url = "https://byui-cit230.github.io/weather/data/towndata.json"

    fetch(url).then(function(response){
        return response.json()

    }).then(data => {
        const towns = data
        let townscontainer = document.querySelector(".towns-container")
        towns["towns"].forEach(town => {
            
            if( town["name"] == "Soda Springs" || town["name"] == "Preston" || town["name"] == "Fish Haven" ){
                
                townscontainer.innerHTML += '<a href="'+ generateImgHref(town["photo"]) +'"><section><div><h3>'+ town["name"] +'</h3><h5>'+ town["motto"]  +'</h5><p>Year Founded: '+ town["yearFounded"] +'</p><p> Population: '+ town["currentPopulation"] +'</p><p>Anual Rain Fall: '+ town["averageRainfall"] +'</p></div><picture><img src="../images/placeholder.png" data-src="../images/'+ town["photo"] +'" alt="'+ town["name"] +'"></picture></section><a>'
                
            }
            
        });
        

    })

    function generateImgHref(imgName){
        return "../" + imgName.replace(".jpg",".html")
    }
}