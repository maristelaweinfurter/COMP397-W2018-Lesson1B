// IIFE  Immediately Invoked Function Expression
(function(){

// Game Variables
let canvas = document.getElementById("canvas");
let stage:createjs.Stage;

  function Init():void {
    console.log("Initialization Started...");
    Start();
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // 60 fps
    createjs.Ticker.on("tick",Update);
    Main();
  }

  function Update():void {
      stage.update(); //redraws the stage
  }

  function Main():void {
    console.log("Game Started...");

  }

  window.onload = Init;

})();
