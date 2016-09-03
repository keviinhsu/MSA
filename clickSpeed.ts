var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;
var drawArray: Array<drawObject> = new Array<drawObject>(); 

function animationFrame(): void {
    requestAnimationFrame(animationFrame);
    context.fillStyle = "black";
    context.fillRect(0, 0, 1280, 720);

    for (var i: number = 0; i < drawArray.length; i++) {
        var d: drawObject = drawArray[i];
        d.drawButton();
    }
}

class button implements drawObject {
    public down: boolean = false; 
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
        canvas.addEventListener("mouseDown", this.mouseDown, false);
        canvas.addEventListener("mouseUp", this.mouseUp, false);
    }

    public drawButton = (): void => {
        context.save();
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "red";
        context.font = this.fontSize + "px Verdana";
        if (this.down == true) {
            context.globalAlpha = 0.5;
            context.rect(this.x - this.halfWidth + 2, this.y - this.halfHeight + 2, this.width, this.height);
        } else {
            context.rect(this.x - this.halfWidth, this.y - this.halfHeight, this.width, this.height);
        }
        context.fillText(this.text, this.x, this.y);
        context.restore();

        context.save();
        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.rect(this.x - this.halfWidth, this.y - this.halfHeight, this.width, this.height); 
        context.stroke();
        context.restore();
    }

public mouseDown = (event: MouseEvent): void => {
    var x: number = event.x
    var y: number = event.y

    if (x > this.x - this.halfWidth && y > this.y - this.halfHeight &&
        x < this.x - this.halfWidth && y < this.y - this.halfHeight) {
            this.down = true; 
            alert('x =' + x + 'y =' + y);
       }
}

public mouseUp = (event: MouseEvent): void => {
    this.down = false; 
    }
}

interface drawObject {
    x: number;
    y: number;
    drawButton(); 
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    drawArray.push(new button(150, 100, 200, 50, "Click Me!"));
    context = canvas.getContext("2d");
    animationFrame();
}