const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function(response){

    return response.json();

}).then(function(objectJson){

    const prophets = objectJson['prophets'];
    let cardDiv = document.querySelector("div.cards")
    
    prophets.forEach(prophet => {
        
        let card = document.createElement("section")
        let h2 = document.createElement("h2")
        let birthdate = document.createElement("p")
        let birthplace = document.createElement("p")
        let picture = document.createElement("picture")
        let image = document.createElement("img")

        h2.textContent = prophet["name"] + " " + prophet["lastname"];
        birthdate.textContent = "Date of birth: " + prophet["birthdate"];
        birthplace.textContent = "Place of birth: " + prophet["birthplace"];  
        image.src = prophet["imageurl"];
        image.alt = prophet["name"]+ " " + prophet["lastname"] + "-" + prophet["order"];
        picture.appendChild(image)
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(picture);
        //card.appendChild(image);
        
        cardDiv.appendChild(card);
        
    });


})