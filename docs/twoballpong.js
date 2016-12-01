var ballX = 100;  //x-position variable
var ballY = 100;  //y-position variable

var ball2X = 600;
var ball2Y = 100;

var xspeed = 5;  //variable for horizontal speed
var yspeed = 6;  //variable for vertical speed

var xspeed2 = -5;
var yspeed2 = -4;

var ballDiameter; //diameter of ball

var paddleWidth;  //paddle width
var paddleHeight; //paddle height

var score = 0; //sets score at 0




function setup() {
	createCanvas (windowWidth, windowHeight); //creates canvas
	ballDiameter = width/20; // ball size
	paddleWidth = width/8; // paddle width
	paddleHeight = paddleWidth/8; //paddle height
}




function draw() {
	background (255); //white background

	fill (0, 0, 255); //blue color fill
	ellipse (ballX, ballY, ballDiameter, ballDiameter); // ellipse (x, y, width, height)

	fill (255, 0, 255);
	ellipse (ball2X, ball2Y, ballDiameter, ballDiameter);


	fill (255, 0, 0); //red color fill

	rectMode (CENTER);
	rect (mouseX, height - paddleHeight/2, paddleWidth, paddleHeight); //paddle (x, y, width, height)




	ballX = ballX + xspeed;  //makes ball move horizontally
	ballY = ballY + yspeed;  //makes ball move vertically

	ball2X = ball2X + xspeed2;
	ball2Y = ball2Y + yspeed2;


	textSize (30); // text size
	fill (255, 0, 0); // red fill
	text ("Score = " + score, 100, 50); //displays score


	// right wall bounce


	if (ballX > windowWidth - ballDiameter/2) {
		xspeed = xspeed * -1;
	}

	if (ball2X > windowWidth - ballDiameter/2) {
		xspeed2 = xspeed2 * -1;
	}


	// left wall bounce

	if (ballX < ballDiameter/2){
		xspeed = xspeed * -1;
	}


	if (ball2X < ballDiameter/2){
		xspeed2 = xspeed2 * -1;
	}


	// bottom wall bounce
	//if (ballY > windowHeight -ballDiameter/2){
	//	yspeed = yspeed * -1;
	//}




	// top wall bounce

	if (ballY < ballDiameter/2) {
		yspeed = yspeed * -1;
	}

	if (ball2Y < ballDiameter/2) {
		yspeed2 = yspeed2 * -1;
	}


	if ((ballY > height - 10) || (ball2Y > height - 10)){
		textSize (60); // text size
		textAlign (CENTER); //align text in center
		fill (0, 0, 255); //blue fill
		text ("Game Over", width/2, height/2); //game over text
	}


	if ((ballY > height) || (ball2Y > height)){


		ballX = 100; //resets ball position on x
		ballY = 100; //resets ball position on y

		ball2X = 600;
		ball2Y = 100;


		// delays game by one second before resetting
		var start = millis();
  		while(millis() < start + 1000) {		
  		}


		xspeed = 5;	// resets xspeed
		yspeed = 6;	// resets yspeed

		xspeed2 = -5;
		yspeed2 = -4;


		score = 0;  // resets score


	}




	// conditoinals for detecting a collision windowHeight


	if (ballY > height - ballDiameter/2 - paddleHeight) { 					// checks that the ball has hit the top edge of the paddle
		if (ballX > mouseX - paddleWidth/2){ 								// checks that the ball is to the left of the right edge of paddle
			if (ballX < mouseX + paddleWidth/2){  							// checks that the ball is to the right of the left edge
				if (ballY < height) { 										// checks that the ball is above the paddle
					ballY = height - paddleHeight - ballDiameter/2; 		// moves ball outside of the paddle to fix a bug with the collision detection
					yspeed = yspeed * -1; 									// bounces ball
					score = score + 1;										// increases score
					ballDiamaeter = ballDiameter - 1;						// decreases ball size
					paddleWidth = paddleWidth - 1; 							// decreases paddle width
					yspeed = yspeed - 1; 									// increases vertical speed
					if (xspeed < 0) {
						xspeed = xspeed - 1; 								// increases horizontal speed
					}
					if (xspeed > 0) {
						xspeed = xspeed + 1; 								// increases horizontal speed
					}
				}
			}
		}
	}

	if (ball2Y > height - ballDiameter/2 - paddleHeight) { 					// checks that the ball has hit the top edge of the paddle
		if (ball2X > mouseX - paddleWidth/2){ 								// checks that the ball is to the left of the right edge of paddle
			if (ball2X < mouseX + paddleWidth/2){  							// checks that the ball is to the right of the left edge
				if (ball2Y < height) { 										// checks that the ball is above the paddle
					ball2Y = height - paddleHeight - ballDiameter/2; 		// moves ball outside of the paddle to fix a bug with the collision detection
					yspeed2 = yspeed2 * -1; 									// bounces ball
					score = score + 1;										// increases score
					ballDiamaeter = ballDiameter - 1;						// decreases ball size
					paddleWidth = paddleWidth - 1; 							// decreases paddle width
					yspeed2 = yspeed2 - 1; 									// increases vertical speed
					if (xspeed2 < 0) {
						xspeed2 = xspeed2 - 1; 								// increases horizontal speed
					}
					if (xspeed2 > 0) {
						xspeed2 = xspeed2 + 1; 								// increases horizontal speed
					}
				}
			}
		}
	}
}	






















