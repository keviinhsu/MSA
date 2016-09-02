var canvas;
var context;
function animationFrame() {
    requestAnimationFrame(animationFrame);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
}
function click(event) {
    var x = event.x;
    var y = event.y;
    alert('x =' + x + 'y = ' + y);
}
window.onload = function () {
    canvas = document.getElementById('canvas');
    canvas.addEventListener("click", click, false);
    context = canvas.getContext("2d");
    animationFrame();
};
//# sourceMappingURL=clickSpeed.js.map