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
	stroke (255);
}

function draw() {
	background (0); //black background
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

	if (ballY < mouseY + paddleHeight/2) {
		if (ballY > mouseY - paddleHeight/2) {
			if (ballX < paddleWidth + ballDiameter/2) {
				if (ballX > 0) {
					xspeed = xspeed * -1;
				}
			}
		}
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
