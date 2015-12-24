function Paddle(scene, texture){
	this.paddle = new PIXI.Sprite(texture);
	scene.addChild(this.paddle);
}