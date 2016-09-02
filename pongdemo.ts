var canvas: HTMLCanvasElement; //Bring up the canvas
var context: CanvasRenderingContext2D; //Render in 2D

function gameLoop(){
    requestAnimationFrame(gameLoop); //Calls the gameloop everytime the frame refreshes
    context.fillStyle = "black"; //Colours the canvas black
    context.fillRect(0, 0, 1280, 720); //The dimension of the canvas
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    context = canvas.getContext("2d");
    gameLoop();
    // Grabbing the element and putting it on the canvas
}