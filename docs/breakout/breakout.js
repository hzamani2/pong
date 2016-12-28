var paddle;
var ball;
var bricks = [];
var x;
var y;

function setup() {
  createCanvas (windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();
  for (var i = 0; i < 40; i++) {
    for (var j = 3; j < 16; j++) {
      x = i * windowWidth/40;
      y = j * windowHeight/40;
      bricks.push(new Brick(x, y));
    }
  }
}

function draw() {
  background(0);
  
  ball.display();
  paddle.display();
  
  collisionDetection(); 

  for (var i = bricks.length -1; i >= 0; i--) {
    bricks[i].display();
    bricks[i].collisionDetection();
    if (bricks[i].notBroken==false) {
      bricks.splice(i,1);
    }
  }

  ball.move();

}



function Paddle () {
  this.paddleWidth = width/8;
  this.paddleHeight = height/30;
  this.ypos = height - this.paddleHeight/2;

  this.display = function () {
    fill (0, 0, 255);
    rectMode (CENTER)
    rect (mouseX, this.ypos, this.paddleWidth, this.paddleHeight);
  }
}

function Brick (_xpos, _ypos) {
  this.w = width/40;
  this.h = height/40;

  this.xpos = _xpos;
  this.ypos = _ypos;

  this.topLeftX = this.xpos
  this.topLeftY = this.ypos

  this.bottomLeftX = this.xpos;
  this.bottomLeftY = this.ypos + this.h;

  this.topRightX = this.xpos + this.w;
  this.topRightY = this.ypos;

  this.bottomRightX = this.xpos + this.w;
  this.bottomRightY = this.ypos + this.h;

  this.notBroken = true;

  this.display = function () {
    fill (0, 0, 255);
    rectMode (CORNER);
    rect (this.xpos, this.ypos, this.w, this.h);
  }

  this.collisionDetection = function () {
    var distance;
    var isHitBottom = false;
    var isHitTop = false;
    var isHitLeft = false;
    var isHitRight = false;
    //bottom
    for (var i = 0; i < this.w; i++) {
      distance = dist (this.bottomLeftX + i, this.bottomLeftY, ball.xpos, ball.ypos);
      if ((distance < ball.diameter/2) && (this.notBroken==true)) {
       isHitBottom = true;
      }
    }
    //top
    for (var i = 0; i < this.w; i++) {
      distance = dist (this.topLeftX + i, this.topLeftY, ball.xpos, ball.ypos);
      if (distance < ball.diameter/2) {
        isHitTop = true;
      }
    }

    //left
    for (var i = 0; i < this.h; i++) {
      distance = dist (this.topLeftX, this.topLeftY + i, ball.xpos, ball.ypos);
      if (distance < ball.diameter/2) {
        isHitLeft = true;
      }
    }

    //right
    for (var i = 0; i < this.h; i++) {
      distance = dist (this.topRightX, this.topRightY + i, ball.xpos, ball.ypos);
      if (distance < ball.diameter/2) {
        isHitRight = true;
      }
    }

    if (isHitBottom) {
      this.notBroken = false;
      //ball.ypos = this.ypos + this.h + ball.diameter/2;
      ball.yspeed = ball.yspeed *-1;
    }

    if (isHitTop) {
      this.notBroken = false;
     // ball.ypos = this.ypos - ball.diameter/2;
      ball.yspeed = ball.yspeed *-1;
    }
    if (isHitLeft) {
      this.notBroken = false;
      //ball.ypos = this.ypos - ball.diameter/2;
      ball.xspeed = ball.xspeed *-1;
    }

    if (isHitRight) {
      this.notBroken = false;
      //ball.ypos = this.ypos - ball.diameter/2;
      ball.xspeed = ball.xspeed *-1;
    }
  }
}

function Ball () {
  this.xpos = 75;
  this.ypos = height/2;
  this.diameter = width/40;
  this.xspeed = random (6,8);
  this.yspeed = random (12,15);

  this.display = function() {
    fill (0, 0, 255);
    ellipse (this.xpos, this.ypos, this.diameter, this.diameter);
  }

  this.move = function () {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
    if ((this.xpos > width - this.diameter/2) || (this.xpos < this.diameter/2)) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.ypos < this.diameter/2) {
      this.yspeed *= -1;
    }
  }
}

function collisionDetection () {
  var distance;
  var isHit = false;
  topLeftX = mouseX - paddle.paddleWidth/2;
  topLeftY = paddle.ypos - paddle.paddleHeight/2;
  for (var i = 0; i < paddle.paddleWidth; i++) {
    for (var j = 0; j < paddle.paddleHeight; j++) {
      x = topLeftX + i;
      y = topLeftY + j;
      distance = dist (x,y,ball.xpos,ball.ypos);
      if (distance < ball.diameter/2) {
        isHit = true;
      }
    }
  }
  if (isHit) {
    ball.ypos = height - paddle.paddleHeight - ball.diameter/2;
    ball.yspeed = ball.yspeed *-1;
  }
}

