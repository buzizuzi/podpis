let isDrawing = false;
let points = [];
let clearButton;
let headImage;

function preload(){
  headImage= loadImage('PASEK4.png');
}

function setup() {
  createCanvas(1920, 1080);
  
  textSize(20);

  let rectX = width / 2 - 602 / 2;
  let rectY = height / 2 - 102 / 2;

  clearButton = createButton('Wyczyść');
  clearButton.position(rectX + 300 - clearButton.width / 2, rectY + 120);
  clearButton.mousePressed(clearDrawing);
}

function draw() {
  background(255);
  image(headImage, 0,0, 1920,220);

  strokeWeight(2);

  let rectX = width / 2 - 602 / 2;
  let rectY = height / 2 - 102 / 2;

  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
 
  noStroke();
  textStyle (NORMAL);
  text("Prosimy nie wychodzić poza pole", width / 2, rectY - 20);

  fill(0);
  textStyle (BOLDITALIC);
  text("Miejsce na czytelny podpis", width / 2, rectY - 50);

  fill(245);
  stroke(0, 0, 0); // Czerwona ramka
  strokeWeight(3);
  rect(rectX, rectY, 600, 100); // Ramka pola do podpisania

  stroke(0);
  
  noFill();
  beginShape();
  for (let point of points) {
    vertex(point.x, point.y);
  }
  endShape();
}

function mousePressed() {
  let rectX = width / 2 - 600 / 2;
  let rectY = height / 2 - 100 / 2;
  if (mouseX > rectX && mouseX < rectX + 600 && mouseY > rectY && mouseY < rectY + 100) {
    isDrawing = true;
    points.push({ x: mouseX, y: mouseY });
  }
}

function mouseDragged() {
  if (isDrawing) {
    let invertedY = height - mouseY;
    points.push({ x: mouseX, y: invertedY });
  }
}

function mouseReleased() {
  isDrawing = false;
}

function clearDrawing() {
  points = [];
}
