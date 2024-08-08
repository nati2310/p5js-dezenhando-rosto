function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  
  function setup() {
    createCanvas(600, 600);
    background("#9C27B0");
  }
  
  function draw() {
    stroke("#E91E63");
    fill("#141314");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  