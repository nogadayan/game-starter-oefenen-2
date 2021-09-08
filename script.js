var x, y, v;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
  v = 7
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + v
  y = y + v

  if(x > 500 || x <= 0){
    v = v * -1;
  }
  if(y > 500 || y <= 0){
    v = v * -1;
  }

}


