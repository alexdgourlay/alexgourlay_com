export const sketch = (p) => {

  let _width = p.windowWidth;
  let _height = p.windowHeight;
  let zoom = 200;
  let backColor = 255;
  let maxRadius = 8;
  let trackSpeed = 0.1;
  let res = 30;


  // let noiseVals;

  var canvas;

  p.disableFriendlyErrors = true;

  p.windowResized = function () {

    _width = p.windowWidth;
    _height = p.windowHeight;
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.setup = function () {
    canvas = p.createCanvas(_width, _height, p.WEBGL);
    canvas.style('z-index', -1);
    p.background(backColor);
    p.noStroke();

    for (var x = -_width / 2; x < _width / 2; x += res) {
      for (var y = -_height / 2; y < _height / 2; y += res) {

      }
    }

    p.frameRate(20);
  }


  var prevMouseX;
  var prevMouseY;

  // var val = 0;

  p.draw = function () {

    if (p.mouseY !== prevMouseY || p.mouseX !== prevMouseX) {

      p.background(backColor);

      for (var x = -_width / 2; x < _width / 2; x += res) {
        for (var y = -_height / 2; y < _height / 2; y += res) {

          var ix = x / zoom;
          var iy = y / zoom;

          var val = 255 * p.noise(ix + p.mouseX * trackSpeed / 100, iy + p.mouseY * trackSpeed / 100);

          if (val < 100) {

            p.fill(val);

            var rad = 30 * maxRadius / val * p.mouseY / _height;

            p.ellipse(x, y, rad, rad);
            // rect(x, y, rad, rad);
          }
        }
      }
    }

    prevMouseX = p.mouseX;
    prevMouseY = p.mouseY;
  }
}

// p.background(255 * Math.abs(Math.sin(val)), 255 * Math.abs(Math.cos(val/2)), 0 );

// val += 0.01;