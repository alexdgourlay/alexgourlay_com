export const sketch = (p) => {

    let _width = p.windowWidth;
    let _height = p.windowHeight;
    let zoom = 200;
    let backColor = 255;
    let maxRadius = 10;
    let trackSpeed = 0.1;
    let res = 20;
  
    var canvas;
  
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
    }
  
    p.draw = function () {
  
      p.background(backColor);
  
      for (var x = -_width / 2; x < _width / 2; x += res) {
        for (var y = -_height / 2; y < _height / 2; y += res) {
  
          var ix = x / zoom;
          var iy = y / zoom;
  
          var val = 255 * p.noise(ix + p.mouseX * trackSpeed / 100, iy + p.mouseY * trackSpeed / 100);
  
          if (val < 100) {
            if (val > 30) {
              p.fill(val);
            } else {
              p.fill(255, 10, 3);
            }
  
            var rad = 50 * maxRadius / val *  p.mouseY /_height / 1.8;
  
            p.ellipse(x, y, rad, rad);
            // rect(x, y, rad, rad);
          }
        }
      }
    }
  }