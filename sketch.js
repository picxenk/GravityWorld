let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  ball.update();
  ball.show();
}


function mouseClicked() {
  // let took = createVector();
  let mPos = createVector(mouseX, mouseY);
  let took = p5.Vector.sub(ball.pos, mPos);
  took.mult(0.1);
  ball.addForce(took);
}
