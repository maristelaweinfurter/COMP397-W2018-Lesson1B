// IIFE  Immediately Invoked Function Expression
(function(){

// Game Variables
let canvas = document.getElementById("canvas");
let stage:createjs.Stage;

  function Init(){
    console.log("Initialization Started...");
    Start();
  }

  function Start(){
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
  }

  function Update() {

  }

  function Main(){

  }

  window.onload = Init;

})();
