var core;
(function (core) {
    "use strict";
    var canvas;
    core.CANVAS_WIDTH = 300;
    core.CANVAS_HEIGHT = 250;
    var stage;
    var thoughtLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;

    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", "300");
        canvas.setAttribute("height", "250");
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
        
        thoughtLabel.x = checkBounds(thoughtLabel.x, core.CANVAS_WIDTH);
        thoughtLabel.y = checkBounds(thoughtLabel.y, core.CANVAS_HEIGHT);
        if ((thoughtLabel.y == core.CANVAS_HEIGHT) || (thoughtLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((thoughtLabel.x == core.CANVAS_WIDTH) || (thoughtLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        thoughtLabel.y += (yDirection * dy);
        thoughtLabel.x += (xDirection * dx);
        
        thoughtLabel.rotation += 5;
        thoughtLabel = new objects.Label("APJ ABDUL KALAM AZAD", "40px Consolas", "#000000", 150, 150, true);
        stage.addChild(thoughtLabel);
        thoughtLabel.x =70;
        thoughtLabel.y=90;
        
        }
    function clicked() {
        window.open("http://assignment1miniportfolio.azurewebsites.net/projects.html")
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map