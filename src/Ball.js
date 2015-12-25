FLOOR = 550;
PIT = 600;
CEILING = 0;
LEFTWALL = 0;
RIGHTWALL = 1000;


function Ball(scene, texture){
	this.ball = new PIXI.Sprite(texture);
	scene.addChild(this.ball);

	ballScale = 0.15;
	this.ball.scale.x = ballScale;
	this.ball.scale.y = ballScale;

	this.x = stage.width / 2;
	this.y = 200;

	this.speedX = 3;
	this.speedY = 3;

	this.bounce = false;

	this.paddle = null;

	this.ballCount = 10;
}

Ball.prototype.update = function () {

	this.y += this.speedY;
	this.x += this.speedX;

	if (this.y > FLOOR && this.speedY > 0) {
		if(this.x > this.paddle.x &&
			this.x < this.paddle.x + this.paddle.width &&
			this.y > this.paddle.y &&
			this.y < this.paddle.y + this.paddle.height){
			this.speedY = -this.speedY;
		}
	}

	if (this.y <= CEILING){
		this.speedY = -this.speedY;
	}

	if (this.x > RIGHTWALL){
		this.speedX = -this.speedX
	}

	if (this.x <= LEFTWALL){
		this.speedX = -this.speedX
	}

	this.ball.position.x = this.x - this.ball.width / 2;
	this.ball.position.y = this.y - this.ball.height / 2 ;

	if (this.y > PIT){
		
		// Update ball counter
		this.ballCount -= 1;

		if (this.ballCount > 0) {
			this.x = stage.width / 2;
			this.y = 200;
		} else {
			// Game over
			// console.log("Game over");
		}
	}
};