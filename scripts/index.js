fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(function(resp){
        return resp.json();
    })
    .then(function(res){
        let divPika = document.querySelector('.pika');
        divPika.innerHTML = `<img src="${res.sprites.front_default}">`;
    });