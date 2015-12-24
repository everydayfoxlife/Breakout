function Ball(scene, texture){
	this.ball = new PIXI.Sprite(texture);
	scene.addChild(this.ball);
}