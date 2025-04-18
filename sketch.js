let points = [[-3, 5], [3, 7], [1, 5],[2,4],[4,3],[5,2],[6,2],[8,4],[8,-1],[6,0],[0,-3],[2,-6],[-2,-3],[-4,-2],[-5,-1],[-6,1],[-6,2]];
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight); //建立畫布，畫布的寬為400，高為400
  for (let i = 0; i < 10; i++) {
    shapes.push(new MovingShape(random(width), random(height)));
  }
}

function draw() { //畫圖
  background("#d6ccc2"); //背景顏色為d6ccc2 
  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}

class MovingShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    stroke("#415a77");
    strokeWeight(10);
    fill("#adb5bd"); // 填充颜色
    beginShape();
    for (let point of points) {
      vertex(point[0] * 20, point[1] * 20); // 放大坐标点
    }
    endShape(CLOSE); // 闭合图形
    pop();
  }
}
