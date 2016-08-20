var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
         var clickMeButton = new createjs.Bitmap("../Assets/Images/clickMeButton.png");
        stage.addChild(clickMeButton);
        clickMeButton.addEventListener("click",clicked);
        clickMeButton.x = 70;
        clickMeButton.y = 200;
        var thought = new objects.Label("APJ ABDUL KALAM AZAD","20px Consolas", "#000000", 50, 50, true);
        stage.addChild(thought);
    }
    function clicked() {
        window.open("http://assignment1miniportfolio.azurewebsites.net/projects.html")
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map