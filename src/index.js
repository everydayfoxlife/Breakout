// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(1000, 550);
var interactive = true;

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var scene = new PIXI.Container(interactive);
var player;

var brickManager = new BrickManager();

// load the texture we need
PIXI.loader.add('stage', 'assets/background.png');
PIXI.loader.add('ball', 'assets/ball.png');
PIXI.loader.add('paddle', 'assets/paddle.png');
PIXI.loader.add('brick-1', 'assets/brick-1.png');
PIXI.loader.add('brick-2', 'assets/brick-2.png');
PIXI.loader.add('brick-3', 'assets/brick-3.png');
PIXI.loader.add('brick-4', 'assets/brick-4.png');

PIXI.loader.load(function (loader, resources) {
	stage = new PIXI.Sprite(resources.stage.texture);

	brickManager.resources = resources;

	// Add the stage to the scene we are building.
	scene.addChild(stage);

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
		// player.moveLeft();
	} else if (keyRightPressed) {
		// player.moveRight();
	}

	// this is the main render call that makes pixi draw your container and its children.
	renderer.render(scene);

	// start the timer for the next animation loop
	requestAnimationFrame(update);

}

