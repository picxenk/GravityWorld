let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  // let gravity = createVector(0, 0.3);
  // ball.addForce(gravity);

  // if (mouseIsPressed) {
  //   let wind = createVector(0.1, 0);
  //   ball.addForce(wind);
  // }
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
