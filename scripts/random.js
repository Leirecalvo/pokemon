let i = Math.floor(Math.random() * 151);

fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(function(resp){
        return resp.json();
    })
    .then(function(res){
        let randomPoke = document.querySelector(".randomPoke");
        randomPoke.innerHTML = " ";
        randomPoke.innerHTML += `
        <audio controls autoplay>
            <source src="cries/${i}.wav" type="audio/wav">
        </audio>
        `;
        randomPoke.innerHTML += `<p>¡Un <span class="capitalize">${res.forms[0].name}</span> salvaje apareció!</p>`;
        randomPoke.innerHTML += `<img class="pokePic" src="${res.sprites.front_default}">`;
       
        if(i === 150 || i === 151 || i === 144 || i === 145 ||  i === 146){
            randomPoke.innerHTML += `<p class="message">¡Utiliza la Master Ball para poder cazarlo!</p>`;
            randomPoke.innerHTML += `<div class="randomPokeBall rotate"><img class="fav" id="${res.forms[0].name}" src="../img/masterball.png"></div>`;
        }
        else{
            randomPoke.innerHTML += `<p class="message">¡Utiliza la Poké Ball para poder cazarlo!</p>`;
            randomPoke.innerHTML += `<div class="randomPokeBall rotate"><img class="fav" id="${res.forms[0].name}" src="../img/pokeball.png"></div>`;
        }
        // randomPoke.innerHTML += `<div class="randomPokeBall rotate"><img class="fav" id="${res.forms[0].name}" src="../img/pokeball.png"></div>`;
        let catchPoke = document.querySelector(".fav");
        let idPoke = document.querySelector(".fav").id;

        catchPoke.addEventListener("click", function(){
            if(i === 150 || i === 151 || i === 144 || i === 145 ||  i === 146){
                Catched();
            }
            else{ 
                let num = Math.floor(Math.random() * 100);
                let randomPokeBall = document.querySelector(".randomPokeBall");
                let message = document.querySelector(".message");
                let pokePic = document.querySelector(".pokePic");
                if(num <= 50){    
                    pokePic.classList.add("pokeNoCatched");
                    randomPokeBall.classList.add("catchNo");
                    message.classList.add("opacity");
                    randomPokeBall.classList.remove("rotate");
                    randomPokeBall.classList.add("rotateStop");
                    message.innerHTML = "Vaya, no ha sido posible… ¡haz click en el entrenador!";
                }
                else if(num > 50){
                    Catched(num);
                }
            }
        })
        function Catched(num){
            let audio = document.querySelector(".battle");
            audio.innerHTML = `
                <source src="cries/win.mp3" type="audio/mp3">
            `;
            let blockPoke = document.querySelector(".block");
            let pokePic = document.querySelector(".pokePic");
            let randomPokeBall = document.querySelector(".randomPokeBall");
            let message = document.querySelector(".message");
            pokePic.classList.add("pokeCatched");
            randomPokeBall.classList.add("catchYes");
            message.classList.add("opacity");
            randomPokeBall.classList.remove("rotate");
            randomPokeBall.classList.add("rotateStop");
            blockPoke.classList.add("sparkle");
            message.innerHTML = `¡Has capturado a <span class="capitalize">${res.forms[0].name}</span>!`;
            localStorage.setItem(num, idPoke);
        }
    })

