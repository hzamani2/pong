var paddleWidth;
var paddleHeight;
var paddleX;
var ballDiameter;
var ballX;
var ballY;
var xspeed = 5;
var yspeed = 8;
var enemyX;
var enemyY;
var player;
var enemy;

function setup() {
	createCanvas (windowWidth, windowHeight);
	paddleHeight = windowHeight/5;
	paddleWidth = paddleHeight/10;
	paddleX = 0;
	ballDiameter = paddleHeight/2;
	ballX = windowWidth/10;
	ballY = windowHeight/10;
	enemyX = windowWidth - paddleWidth/2;
	enemyY = windowHeight/2;
	player = new Paddle (width/50, mouseY, true);
	stroke (255);
}



function draw() {
	background (0); //black background
	collisionDetection();
  player.display();
	fill (0, 0, 255);
	strokeWeight (10);
	line (windowWidth/2, 0, windowWidth/2, windowHeight);
	rectMode (CENTER);
	strokeWeight (1);
	rect (paddleX, mouseY, paddleWidth, paddleHeight);
	rect (enemyX, enemyY, paddleWidth, paddleHeight);
	ellipse (ballX, ballY, ballDiameter, ballDiameter);
	ballX = ballX + xspeed;
	ballY = ballY + yspeed;

	enemyY = ballY;

	if ((ballY < ballDiameter/2) || (ballY > windowHeight - ballDiameter/2)) {
		yspeed = yspeed * -1;
	}

	if (ballY < enemyY + paddleHeight/2) {
		if (ballY > enemyY - paddleHeight/2) {
			if (ballX > windowWidth -ballDiameter/2) {
				if (ballX < windowWidth){
					xspeed = xspeed * -1;
				}
			}
		}
	}
}
function Paddle (_xpos, _ypos, _isPlayer) {
  this.xpos = _xpos;
  this.ypos = _ypos;
  this.isPlayer = _isPlayer;
  this.paddleHeight = height/5;
  this.paddleWidth = width/50;
  
  this.display = function () {
    rectMode (CENTER);
    fill (0, 0, 255);
    rect (xpos, ypos, paddleWidth, paddleHeight);
  }
}

function collisionDetection () {
	var distance;
	var isHit = false;
	topLeftX = paddleX - paddleWidth/2;
	topLeftY = mouseY - paddleHeight/2;
	for (var i = 0; i < paddleWidth; i++) {
		for (var j = 0; j < paddleHeight; j++) {
			x = topLeftX + i;
			y = topLeftY + j;
			distance = dist (x,y,ballX,ballY);
			if (distance < ballDiameter/2) {
				isHit = true;
			}
		}
	}
	if (isHit) {
		xspeed = xspeed * -1;
		ballX = paddleWidth + ballDiameter/2;
	}
}
