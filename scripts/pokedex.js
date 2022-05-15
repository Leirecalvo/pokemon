let closePoke = document.querySelector("#closeInfo");
let overlay = document.querySelector(".overlay");
let divInfoPoke = document.querySelector(".infoPoke");
let previous = document.querySelector("#previousInfo"); 
let next = document.querySelector("#nextInfo"); 
let contador = 1;

closePoke.addEventListener("click", function(){
    location.reload();
});

// closePoke.addEventListener("click", function(){
//     divInfoPoke.innerHTML = "";
//     overlay.style.display = 'none';
//     closePoke.style.display = 'none';
//     previous.style.display = 'none';
//     next.style.display = 'none';
//     document.querySelector("#vColor").style.display = "block";
//     document.querySelector("#vRed").style.display = "block";
//     document.querySelector("#vBlue").style.display = "block";
//     document.querySelector("#vGray").style.display = "block";  
// });

fetch("https://pokeapi.co/api/v2/pokedex/2/")
.then(function(res){
    return res.json();
})
.then(function(res){
    res.pokemon_entries.forEach(element => {
        let pokedexDiv = document.querySelector('.pokedex');
        pokedexDiv.innerHTML += `<p class="selection" id="${element.pokemon_species.name}" atr="${element.entry_number}">${element.entry_number} - ${element.pokemon_species.name}</p>`;
    })
    let selectionPoke = document.querySelectorAll(".selection");
    selectionPoke.forEach(element =>{
        element.addEventListener("click", function(){
            contador = parseInt(this.getAttribute("atr"));
            pokeSearch(this.id);
            document.querySelector(".overlay").style.display = "flex";
            document.querySelector("#closeInfo").style.display = "flex";
            document.querySelector("#vColor").style.display = "none";
            document.querySelector("#vRed").style.display = "none";
            document.querySelector("#vBlue").style.display = "none";
            document.querySelector("#vGray").style.display = "none";
            arrows();
        })
    })
});

function pokeSearch(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(resp){
        return resp.json();
    })
    .then(function(res){
        divInfoPoke.innerHTML = " ";
        divInfoPoke.innerHTML += `<h2>${res.forms[0].name}</h2>`;
        divInfoPoke.innerHTML += `<img class="pokePic" src="${res.sprites.front_default}">`;
        let type = res.types[0].type.name;
        if(type === "grass"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Planta</p>
            `;
        }else if(type === "water"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Agua</p>
            `;
        }else if(type === "normal"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Normal</p>
            `;
        }else if(type === "fire"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Fuego</p>
            `;
        }else if(type === "ghost"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Fantasma</p>
            `;
        }else if(type === "bug"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Bicho</p>
            `;
        }else if(type === "poison"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Veneno</p>
            `;
        }else if(type === "electric"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Eléctrico</p>
            `;
        }
        else if(type === "ground"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Tierra</p>
            `;
        }
        else if(type === "psychic"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Psíquico</p>
            `;
        }
        else if(type === "fairy"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Hada</p>
            `;
        }
        else if(type === "rock"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Roca</p>
            `;
        }
        else if(type === "dark"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Siniestro</p>
            `;
        }
        else if(type === "steel"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Acero</p>
            `;
        }
        else if(type === "dragon"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Dragón</p>
            `;
        }
        else if(type === "fighting"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Lucha</p>
            `;
        }
        else if(type === "ice"){
            divInfoPoke.innerHTML += `
                <p class="type"><u>Tipo:</u> Hielo</p>
            `;
        }
        else{
            divInfoPoke.innerHTML += `
            <p class="type"><u>Tipo:</u> ${type}</p>
        `;
        }
        let numPoke = res.id;

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${numPoke}`)
        .then(function(respu){
            return respu.json();
        })
        .then(function(respu){
            
            let divInfo = document.querySelector(".infoPoke");
            respu.flavor_text_entries.forEach(element =>{
                let name = element.language.name;
                let version = element.version.name;
                    if(name === "es" && version === "x"){
                        divInfo.innerHTML += `
                        <p><u>Descripción:</u> ${element.flavor_text}</p>
                    `;
                }
            })
            // divInfo.innerHTML += `
            //     <p class="type"><u>Tipo:</u></p>
            // `;
            divInfo.innerHTML += `
            <audio controls autoplay>
                <source src="cries/${numPoke}.wav" type="audio/wav">
            </audio>
            `;
            // respu.egg_groups.forEach(element =>{
            //     fetch(element.url)
            //     .then(function(respue){ 
            //         return respue.json();
            //     })
            //     .then(function(respue){
            //         let type = respue.names[4].name;
            //         let pInfo = document.querySelector(".type");
            //         if(type !== "Monstruo"){
            //             pInfo.innerHTML += `
            //                 <span>${type}</span>
            //             `;
            //         } 
            //     })
            // })
        })
    }) 
}

function arrows(){
    displayArrows();
    next.addEventListener("click", function(){
        nextPoke(true);
    })
    previous.addEventListener("click", function(){
        nextPoke(false);
    })
}

function nextPoke(bool){
    if(bool){
        contador++;
    }else{
        contador--;
    }
    displayArrows();
    console.log(`https://pokeapi.co/api/v2/pokemon-species/${contador}`);
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${contador}`)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            let nextName = res.name;
            pokeSearch(nextName);
        })    
}

function displayArrows(){
    if(1 < contador && contador < 151){
        document.querySelector("#nextInfo").style.display = "flex";
        document.querySelector("#previousInfo").style.display = "flex";
    }else if(contador === 1){
        document.querySelector("#previousInfo").style.display = "none";
        document.querySelector("#nextInfo").style.display = "flex";
    }else if(contador === 151){
        document.querySelector("#previousInfo").style.display = "flex";
        document.querySelector("#nextInfo").style.display = "none";
    }
}