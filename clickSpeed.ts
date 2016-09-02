var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;
var drawArray: Array<button> = new Array<button>(); 

function animationFrame(): void {
    requestAnimationFrame(animationFrame);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);

    for (var i: number = 0; i < drawArray.length, i++;) {
        var d: button = drawArray[i];
        d.drawButton();
    }
}

function click(event: MouseEvent): void {
    var x: number = event.x;
    var y: number = event.y;

    alert('x =' + x + 'y = ' + y);
}

class button {
    public x: number;
    public y: number; 
    public width: number;
    public height: number; 
    public halfWidth: number;
    public halfHeight: number;
    public text: string;
    public fontSize: number;

    constructor(x: number, y: number, width: number, height: number, text: string, fontSize: number = 32) {
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
        this.text = text;
        this.fontSize = fontSize; 
    }

    public drawButton = (): void => {
        context.save();
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "white";
        context.font = this.fontSize + "px Verdana";
        context.fillText(this.text, this.x, this.y);
        context.restore();

        context.save();
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.rect(this.x - this.halfWidth, this.y - this.halfWidth, this.width, this.height); 
        context.stroke();
        context.restore();
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.addEventListener("click", click, false);
    context = canvas.getContext("2d");
    drawArray.push(new button(150, 100, 100, 200, "Click Me!"))
    animationFrame();
}