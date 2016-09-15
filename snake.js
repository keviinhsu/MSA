var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
function randomInt(upperRange, lowerRange) {
    return Math.round((Math.floor(Math.random() * (upperRange - lowerRange + 1)) + lowerRange));
}
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }
    Point.prototype.moveToPoint = function (p) {
        if (this.tail != null) {
            this.tail.moveToPoint(this);
        }
        this.x = p.x;
        this.y = p.y;
    };
    return Point;
}());
var SnakeGame = (function () {
    function SnakeGame(canvas) {
        this.canvas = canvas;
        this.canvas.width = 400;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        this.tileSize = 10;
    }
    SnakeGame.prototype.start = function () {
        this.restart();
        setInterval(function () { return game.loop(); }, 70);
    };
    SnakeGame.prototype.restart = function () {
        this.snakeHead = new Point(20, 10);
        this.snakeHead.tail = new Point(10, 10);
        this.snakeHead.tail.tail = new Point(0, 10);
        this.direction = Direction.Right;
        this.placeFood();
    };
    SnakeGame.prototype.loop = function () {
        this.move();
        if (this.gameOver()) {
            this.restart();
        }
        this.draw();
    };
    SnakeGame.prototype.snakeOutOfBounds = function () {
        return (this.snakeHead.x < 0 ||
            this.snakeHead.y < 0 ||
            this.snakeHead.x + this.snakeHead.width > this.canvas.width ||
            this.snakeHead.y + this.snakeHead.height > this.canvas.height);
    };
    SnakeGame.prototype.snakeTouchingItself = function () {
        var p = this.snakeHead.tail;
        while (p != null) {
            if (p.x == this.snakeHead.x &&
                p.y == this.snakeHead.y)
                return true;
            p = p.tail;
        }
        return false;
    };
    SnakeGame.prototype.gameOver = function () {
        return this.snakeOutOfBounds() || this.snakeTouchingItself();
    };
    SnakeGame.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#000000";
        var p = this.snakeHead;
        while (p != null) {
            this.context.fillRect(p.x, p.y, p.width - 1, p.height - 1);
            p = p.tail;
        }
        this.context.fillRect(this.food.x, this.food.y, this.food.width - 1, this.food.height - 1);
    };
    SnakeGame.prototype.move = function () {
        var xNew = this.snakeHead.x;
        var yNew = this.snakeHead.y;
        switch (this.direction) {
            case Direction.Left:
                xNew -= this.tileSize;
                break;
            case Direction.Right:
                xNew += this.tileSize;
                break;
            case Direction.Up:
                yNew -= this.tileSize;
                break;
            case Direction.Down:
                yNew += this.tileSize;
                break;
            default:
                break;
        }
        if (xNew == this.food.x &&
            yNew == this.food.y) {
            this.eat();
        }
        else {
            this.snakeHead.tail.moveToPoint(this.snakeHead);
            this.snakeHead.x = xNew;
            this.snakeHead.y = yNew;
        }
    };
    SnakeGame.prototype.moveLeft = function () {
        if (this.direction != Direction.Right)
            this.direction = Direction.Left;
    };
    SnakeGame.prototype.moveRight = function () {
        if (this.direction != Direction.Left)
            this.direction = Direction.Right;
    };
    SnakeGame.prototype.moveUp = function () {
        if (this.direction != Direction.Down)
            this.direction = Direction.Up;
    };
    SnakeGame.prototype.moveDown = function () {
        if (this.direction != Direction.Up)
            this.direction = Direction.Down;
    };
    SnakeGame.prototype.eat = function () {
        this.food.tail = this.snakeHead;
        this.snakeHead = this.food;
        this.placeFood();
    };
    SnakeGame.prototype.placeFood = function () {
        var noOfTiles = (this.canvas.width / this.tileSize) * (this.canvas.height / this.tileSize);
        var a = new Array(noOfTiles);
        for (var i = 0; i < noOfTiles; i++) {
            var x = (i % (this.canvas.width / this.tileSize)) * this.tileSize;
            var y = (Math.floor(i / (this.canvas.width / this.tileSize))) * this.tileSize;
            if (i == 799) {
                var b = i;
            }
            a[i] = new Point(x, y);
        }
        var snakeParts = new Array();
        var p = this.snakeHead;
        while (p != null) {
            snakeParts.push(p);
            p = p.tail;
        }
        var validPoints = new Array();
        for (var i = 0; i < a.length; i++) {
            if (!this.pointInArray(a[i], snakeParts))
                validPoints.push(a[i]);
        }
        var newPointIndex = randomInt(validPoints.length - 1, 0);
        this.food = validPoints[newPointIndex];
    };
    SnakeGame.prototype.pointInArray = function (p, pointArray) {
        for (var i = 0; i < pointArray.length; i++) {
            var pointAtIndex = pointArray[i];
            if (pointAtIndex.x == p.x && pointAtIndex.y == p.y)
                return true;
        }
        return false;
    };
    return SnakeGame;
}());
function keyboardListener(e) {
    var keyString = String.fromCharCode(e.keyCode);
    if (keyString == 'a' || keyString == 'A') {
        game.moveLeft();
    }
    else if (keyString == 'd' || keyString == 'D') {
        game.moveRight();
    }
    else if (keyString == 'w' || keyString == 'W') {
        game.moveUp();
    }
    else if (keyString == 's' || keyString == 'S') {
        game.moveDown();
    }
}
;
var game;
window.onload = function () {
    document.onkeydown = keyboardListener;
    var el = document.getElementById('gameCanvas');
    game = new SnakeGame(el);
    game.start();
};
//# sourceMappingURL=snake.js.map