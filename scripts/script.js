let pokeBall1 = document.querySelector("#vColor");
let pokeBall2 = document.querySelector("#vRed");
let pokeBall3 = document.querySelector("#vGray");
let pokeBall4 = document.querySelector("#vBlue");
let main = document.querySelector("main");

if(localStorage.getItem("main")){
  let localMain = localStorage.getItem("main");
  main.classList.remove();
  main.classList.add(localMain);
}

pokeBall1.addEventListener('click', function(){
  main.classList.remove("red", "blue", "gray");
  main.classList.add("color");
  localStorage.setItem("main", "color");
})
pokeBall2.addEventListener('click', function(){
  main.classList.remove("color", "blue", "gray");
  main.classList.add("red");
  localStorage.setItem("main", "red");
})
pokeBall3.addEventListener('click', function(){
  main.classList.remove("blue", "red", "color");
  main.classList.add("gray");
  localStorage.setItem("main", "gray");
})
pokeBall4.addEventListener('click', function(){
  main.classList.remove("red", "gray", "color");
  main.classList.add("blue");
  localStorage.setItem("main", "blue");
})

