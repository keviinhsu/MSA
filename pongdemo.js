var canvas; //Bring up the canvas
var context; //Object rendered in 2D
var Circle = (function () {
    function Circle(x, y, radius, color, lineWidth) {
        var _this = this;
        if (x === void 0) { x = randomNumber(10, 500); }
        if (y === void 0) { y = randomNumber(10, 500); }
        if (radius === void 0) { radius = 10; }
        if (color === void 0) { color = "red"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.draw = function () {
            context.beginPath();
            context.strokeStyle = _this.color;
            context.lineWidth = _this.lineWidth;
            context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            context.stroke();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    return Circle;
}());
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //Generate a random number
}
function gameLoop() {
    requestAnimationFrame(gameLoop); //Calls the gameloop everytime the frame refreshes
    context.fillStyle = "black"; //Colours the canvas black
    context.fillRect(0, 0, 1280, 720); //The dimension of the canvas
}
function mouseDown(event) {
    var x = event.x - canvas.offsetLeft;
    var y = event.y - canvas.offsetTop;
}
window.onload = function () {
    canvas = document.getElementById("canvas");
    canvas.addEventListener("mouseDown", mouseDown, false);
    context = canvas.getContext("2d");
    gameLoop();
    // Grabbing the element and putting it on the canvas
    var circles = new Circle(25);
};
//# sourceMappingURL=pongdemo.js.map