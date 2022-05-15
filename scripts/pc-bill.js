myPokemons();
function myPokemons(){
    let values = allStorage();
    for(let i = 0; i < values.length; i++){
        let favContent = document.querySelector(".computer");
        if(values[i] !== "color" && values[i] !== "red" && values[i] !== "blue" && values[i] !== "gray"){
            fetch(`https://pokeapi.co/api/v2/pokemon/${values[i]}`)
                .then(function(resp){
                    return resp.json();
                })
                .then(function(res){
                    favContent.innerHTML += `<div id="${res.game_indices[3].game_index}" class="myPoke"><img src="${res.sprites.front_default}"><p>${res.forms[0].name}</p></div>`;
                    let myPoke = document.querySelector(".myPoke").id;
                })
        } 
    }
}
function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}
