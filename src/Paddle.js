function Paddle(scene, texture){
	this.sprite = new PIXI.Sprite(texture);
	scene.addChild(this.sprite);

	this.x = stage.width / 2;
	this.y = 550;

	this.width = this.sprite.width;
	this.height = this.sprite.height;

	paddleScale = 0.5;
	this.sprite.scale.x = paddleScale;
	this.sprite.scale.y = paddleScale;

	this.update();
}

Paddle.prototype.moveRight = function (){
	
	if (this.x > 1000){
		return;
	}
	this.x += 10;

	this.update();
}

Paddle.prototype.moveLeft = function (){

	if (this.x < 0){
		return;
	}

	this.x -= 10;

	this.update();
}

Paddle.prototype.update = function () {
	this.sprite.position.x = this.x;
	this.sprite.position.y = this.y + 10;
}