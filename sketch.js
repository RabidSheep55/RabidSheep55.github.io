let w = 25;
let t = 0;
let n = 10;
let mid = w * (n / 2);
let ma;

function setup() {
  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('testbox');
  ortho(-width / 2, width / 2, -height / 2, height / 2, -10000, 10000);
  ma = atan(1 / sqrt(2))
}

function draw() {
  background(230, 232, 234);
  noStroke();
  directionalLight(230, 150, 177, 10, 0, 0);
  directionalLight(65, 84, 132, 0, 10, 0);
  directionalLight(137, 167, 198, 0, 0, -10);
  ambientMaterial(255);
  translate(-w / 2, w * (n / 2), w / 2);
  rotateX(-ma);
  rotateY(QUARTER_PI);


  for (let z = 0; z < n * w; z += w) {
    for (let x = 0; x < n * w; x += w) {
      let offset = sqrt((x - mid) ** 2 + (z - mid) ** 2) * (3 / mid);
      let h = sin(t + offset) * 2 * w + 4 * w;
      translate(w, 0, 0);
      box(w, h, w);
    }
    translate(-n * w, 0, -w);
  }


  t += 0.09;
}