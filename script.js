class ball {
  constructor(h, w, x, y, vx, vy, c) {
  this.h = h;
  this.w = w;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.c = c;
  }

  draw(){
    fill(this.c);
    ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(x > 300 || x < 0){
    vx = vx * -1;
    }
    if(y > 300 || y < 0){
    vy = vy * -1;
    }
  }
}

var ball1, ball2, ball3;

function setup() {
	createCanvas(300, 300);
  
  ball1 = new Ball(50, 50, 30, 200, 5, 5, "red")
  ball2 = new Ball(50, 50, 20, 190, 3, 3, "green")
  ball3 = new Ball(50, 50, 10, 180, 7, 7, "yellow")
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(x > 300 || x < 0){
    vx = vx * -1;
  }
  if(y > 300 || y < 0){
    vy = vy * -1;
  }

}




