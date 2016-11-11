var ballX = 100;
var ballY = 100;

var xspeed = 4;
var yspeed = 7;

var ballDiameter;
var ballRadius;

var paddleWidth;
var paddleHeight;

var score = 0;


function setup() {
	createCanvas (windowWidth, windowHeight);
	ballDiameter = windowWidth/20;
	paddleWidth = ballDiameter * 3;
	paddleHeight = paddleWidth/5;
}

function draw() {
	background (0);
	fill (0, 0, 255);
	ellipse (ballX, ballY, ballDiameter, ballDiameter);
	rectMode (CENTER);
	rect (mouseX, windowHeight - paddleHeight/2, paddleWidth, paddleHeight);
	ballX = ballX + xspeed;
	ballY = ballY + yspeed;

	if (ballX > windowWidth - ballDiameter/2) {
		xspeed = xspeed * -1;
	}

	if (ballX < ballDiameter/2) {
		xspeed = xspeed * -1;
	}

	if (ballY < ballDiameter/2) {
		yspeed = yspeed * -1;
	}

	if (ballX > mouseX - paddleWidth/2){
		if (ballX < mouseX + paddleWidth/2){
			if (ballY < windowHeight - paddleHeight){
				if (ballY > windowHeight - ballDiameter/2 - paddleHeight) {
					yspeed = yspeed * -1;
					score = score + 1;
				}
			}
		}
	}

	fill (255);
	textSize (24);
	text ("Score " + score, 100, 100);
	
}