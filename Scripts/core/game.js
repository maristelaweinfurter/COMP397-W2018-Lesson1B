// IIFE  Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update(); //redraws the stage
    }
    function Main() {
        console.log("Game Started...");
    }
    window.onload = Init;
})();
