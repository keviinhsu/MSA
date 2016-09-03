var canvas;
var context;
var drawArray = new Array();
function animationFrame() {
    requestAnimationFrame(animationFrame);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
    for (var i = 0; i < drawArray.length; i++) {
        var d = drawArray[i];
        d.drawButton();
    }
}
var button = (function () {
    function button(x, y, width, height, text, fontSize) {
        var _this = this;
        if (fontSize === void 0) { fontSize = 32; }
        this.down = false;
        this.drawButton = function () {
            context.save();
            context.beginPath();
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillStyle = "red";
            context.font = _this.fontSize + "px Verdana";
            if (_this.down == true) {
                context.globalAlpha = 0.5;
                context.rect(_this.x - _this.halfWidth + 2, _this.y - _this.halfHeight + 2, _this.width, _this.height);
            }
            else {
                context.rect(_this.x - _this.halfWidth, _this.y - _this.halfHeight, _this.width, _this.height);
            }
            context.fillText(_this.text, _this.x, _this.y);
            context.restore();
            context.save();
            context.lineWidth = 2;
            context.strokeStyle = "red";
            context.rect(_this.x - _this.halfWidth, _this.y - _this.halfHeight, _this.width, _this.height);
            context.stroke();
            context.restore();
        };
        this.mouseDown = function (event) {
            var x = event.x;
            var y = event.y;
            if (x > _this.x - _this.halfWidth && y > _this.y - _this.halfHeight &&
                x < _this.x - _this.halfWidth && y < _this.y - _this.halfHeight) {
                _this.down = true;
                alert('x =' + x + 'y =' + y);
            }
        };
        this.mouseUp = function (event) {
            _this.down = false;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
        this.text = text;
        this.fontSize = fontSize;
        canvas.addEventListener("pressed", this.mouseDown, false);
        canvas.addEventListener("mouseUp", this.mouseUp, false);
    }
    return button;
}());
window.onload = function () {
    canvas = document.getElementById('canvas');
    drawArray.push(new button(150, 100, 200, 50, "Click Me!"));
    context = canvas.getContext("2d");
    animationFrame();
};
//# sourceMappingURL=clickSpeed.js.map