var creerColorBlocks = (function creerColorBlocks(){
  "use strict";
  var btn, color, nb, blocks;
  var count = 0;
  const creerBlocks = function creerBlocks(){
    for (let i = 0; i < nb.value; i++) {
      let block = document.createElement("div");
      block.style.background = color.value;
      block.classList.add(".block");
      blocks.appendChild(block);
    }
    document.getElementById("saisie").style.backgroundColor=color.value;
    console.log(color.value);
    console.log(nb.value);
  };

  const creerRandom = function creerRandom(){
    let block = document.createElement("div");
    block.style.background = getRandomColor();
    blocks.appendChild(block);
    document.getElementById("saisie").style.backgroundColor=color.value;
    count++;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.fontFamily = "SquareFont";
    document.getElementById("counter").style.fontSize = "40px";
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("colorName").innerHTML = color;
    document.getElementById("colorName").style.color=color;
    document.getElementById("titre").style.color=color;
    document.getElementById("colorName").style.fontFamily="arcade normal";
    return color;
  }

  var hour = 0;
  var min = 0;
  var sec = 0;
  min = "0"+min;
  hour = "0"+hour;
  function chronometre(){
    document.getElementById("chrono").style.color=getRandomColor();
    sec++;
    if (sec < 10) {
      sec = "0"+sec;
    }

    if (sec > 59){
      sec = 0;
      sec = "0"+sec;
      min++;
      if (min < 10) {
        min = "0"+min;
      }
    }
    if (min > 59){
      min = 0;
      min = "0"+min;
      hour++;
      if (hour < 10) {
        hour = "0"+hour;
      }
    }

    document.getElementById("chrono").innerHTML = hour+":"+min+":"+sec;

  }

  const updateBlocks = function updateBlocks(){
    console.log("active");
    for (let i = 0; i < actives.length; i++) {
      actives[i].style.backgroundColor = color.value;
    }
  };

  const creerDiv = function creerDiv(n, c){
    var section = document.createElement("section");
    for (var i = 0; i < n; i++) {
      var div = document.createElement("div");
      console.log(div);
      section.appendChild(div);
      document.getElementsByTagName("div").style.background = c;
    }
  };

  const init= function init(){
    btn = document.getElementById("saisieValider");
    color = document.getElementById("saisieCouleur");
    nb = document.getElementById("saisieNombre");
    blocks = document.getElementById("blocks");
    btn.onclick = function(){
      const actives = document.querySelectorAll(".block.is-active");
      if(actives.length){ // si il y a au moins un block actif
        updateBlocks();
      }
      else{
        creerBlocks();
      }
    };

    var intervalle = window.setInterval(creerRandom, 500);
    var timer = window.setInterval(chronometre, 1000);
  };


  window.onload = init;


}()); //fin
