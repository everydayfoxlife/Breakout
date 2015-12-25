function BrickManager(){
	this.bricks = [];
	this.resources = null;

	this.ball = null;
}

BrickManager.prototype.addBrick = function (brick) {
	this.bricks.push(brick);
	brick.BrickManager = this;
};

BrickManager.prototype.destroyBrick = function (brick) {

	brick.destroy();

	var index = this.bricks.indexOf(brick);
	if (index === -1) {
		return console.error('Brick not found in array');
	}

	this.bricks.splice(index, 1);
};

BrickManager.prototype.update = function () {
	// Check if ball is colliding with any brick then destroy
	var ball = this.ball;

	for(var i = 0; i < this.bricks.length; i++){
		var brick = this.bricks[i];

		if (ball.y > brick.y && ball.y < brick.y + brick.height && ball.x > brick.x && ball.x < brick.x + brick.width) {
			this.destroyBrick(brick);
			ball.speedY = -ball.speedY;
		}
	}
}