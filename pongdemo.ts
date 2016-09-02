var canvas: HTMLCanvasElement; //Bring up the canvas
var context: CanvasRenderingContext2D; //Object rendered in 2D

class Circle { 
    public x: number;
    public y: number;
    public radius: number; 
    public lineWidth: number; 
    public color: string; 
    constructor(x: number = 0, y: number = 0, radius: number = 10, color: string, lineWidth: number = 2) {
        this.x = x; 
        this.y = y;
        this.radius = radius; 
        this.color = color;
        this.lineWidth = lineWidth; 
    } 
    public draw =(): void => {
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
    }
}


function gameLoop(){
    requestAnimationFrame(gameLoop); //Calls the gameloop everytime the frame refreshes
    context.fillStyle = "black"; //Colours the canvas black
    context.fillRect(0, 0, 1280, 720); //The dimension of the canvas
}

function mouseDown(event: MouseEvent): void {
    var x: number = event.x - canvas.offsetLeft;
    var y: number = event.y - canvas.offsetTop;

    
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    canvas.addEventListener("mouseDown", mouseDown, false);
    context = canvas.getContext("2d");
    gameLoop();
    // Grabbing the element and putting it on the canvas
}