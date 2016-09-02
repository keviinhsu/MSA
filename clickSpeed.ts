var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;

function animationFrame(): void {
    requestAnimationFrame(animationFrame);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);
}

function click(event: MouseEvent): void {
    var x: number = event.x;
    var y: number = event.y;

    alert('x =' + x + 'y = ' + y);
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.addEventListener("click", click, false);
    context = canvas.getContext("2d");
    animationFrame();
}