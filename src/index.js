// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(1000, 600);
var interactive = true;

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var scene = new PIXI.Container(interactive);
var paddle;

var brickManager = new BrickManager();

var brickCount = 20;

var gridCol = 11;
var gridRow = 5;

var brickTextures = ['brick1', 'brick2', 'brick3', 'brick4'];

var level = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[3, 3, 0, 2, 2, 2, 2, 2, 0, 3, 3],
	[0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0],
	[0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0]
];

// load the texture we need
PIXI.loader.add('stage', 'assets/background.png');
PIXI.loader.add('ball', 'assets/ball.png');
PIXI.loader.add('paddle', 'assets/paddle.png');
PIXI.loader.add('brick1', 'assets/brick-1.png');
PIXI.loader.add('brick2', 'assets/brick-2.png');
PIXI.loader.add('brick3', 'assets/brick-3.png');
PIXI.loader.add('brick4', 'assets/brick-4.png');

PIXI.loader.load(function (loader, resources) {
	stage = new PIXI.Sprite(resources.stage.texture);

	brickManager.resources = resources;

	// Add the stage to the scene we are building.
	scene.addChild(stage);

	brickManager.resources = resources;

	paddle = new Paddle(scene, resources.paddle.texture);

	// for (var i = 0; i < brickCount; i ++) {
	// 	var r = Math.floor(Math.random() * brickTextures.length);
	// 	// var brickTexture = resources['brick' + (r + 1)].texture;
	// 	var brickTextureName = brickTextures[r];
	// 	console.log(r, brickTextureName);

	// 	var brickTexture = resources[brickTextureName].texture;
	// 	var brick = new Brick(scene, brickTexture);
	// 	brickManager.addBrick(brick);
	// }

	for (var x = 0; x < gridCol; x++){

		for (var y = 0; y < gridRow; y++){
			var r = level[y][x];
			// var brickTexture = resources['brick' + (r + 1)].texture;
			var brickTextureName = brickTextures[r];

			var brickTexture = resources[brickTextureName].texture;
			var brick = new Brick(scene, brickTexture);
			brick.setPosition(x, y);
			brickManager.addBrick(brick);
		}

	}

	ball = new Ball(scene, resources.ball.texture);
	ball.paddle = paddle;

	brickManager.ball = ball;

	update();

});

var keyRightPressed = false;
var keyLeftPressed = false;

window.addEventListener("keydown", function (e) {
	// console.log(e.keyCode)
	if (e.keyCode === 39) {
		keyRightPressed = true;
	}

	if (e.keyCode === 37) {
		keyLeftPressed = true;
	}

});

window.addEventListener("keyup", function (e) {
	if (e.keyCode === 39) {
		keyRightPressed = false;
	}

	if (e.keyCode === 37) {
		keyLeftPressed = false;
	}

});

// Update will be called once every frame
function update() {

	if (keyLeftPressed) {
		paddle.moveLeft();
	} else if (keyRightPressed) {
		paddle.moveRight();
	}

	brickManager.update();
	ball.update();

	// this is the main render call that makes pixi draw your container and its children.
	renderer.render(scene);

	// start the timer for the next animation loop
	requestAnimationFrame(update);

}

