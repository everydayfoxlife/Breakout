function Bricks(scene, texture){
	this.brick = new PIXI.Sprite(texture);
	scene.addChild(this.brick);
}