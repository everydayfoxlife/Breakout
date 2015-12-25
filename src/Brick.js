function Brick(scene, texture){
	this.brick = new PIXI.Sprite(texture);
	scene.addChild(this.brick);

	this.maxHp = 100;
	this.hp = 100;

	brickScale = 0.3;
	this.brick.scale.x = brickScale;
	this.brick.scale.y = brickScale;

	this.x = 0;
	this.y = 0;
	this.width = this.brick.width;
	this.height = this.brick.height;
}

Brick.prototype.setPosition = function(x, y) {
	this.brick.position.x = this.brick.width * x;
	this.brick.position.y = this.brick.height * y;
	this.x = this.width * x;
	this.y = this.height * y;
};

Brick.prototype.destroy = function() {
	// TODO
	var self = this;

	var deathSequence = new TINA.Sequence()
	.add(
		new TINA.NestedTween(self.brick, ['rotation']).to({
			rotation: 2}, 500)
			).onComplete(function () {
				self.brick.parent.removeChild(self.brick);
			});

		deathSequence.start();
}
