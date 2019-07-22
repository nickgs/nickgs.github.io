export default function sketch (p) {
    var part = new Particle();
    var max_parts = 20;
    var num_parts = 0;
  
    p.setup = function () {
      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      p.createCanvas(width, height);
      p.background(p.color("white"));
      p.frameRate(10);

      p.noStroke();

      // for(var i = 0; i < p.canvas.height; i++) {
      //   p.circle(p.random(0,20),p.random(p.canvas.height), p.random(0,20));
      // }

    };
  
  
    p.draw = function () {
      if(num_parts <= max_parts) {
        p.stroke("black");
        p.background(p.color(255,255,255, 40));
        p.noFill();
        part.draw(p);
        num_parts++;
      }
    };
  };

class Particle {
    constructor() {
        this.x = 300;
        this.y = 500;
    }

    draw = function(p) {
        p.circle(p.random(150, p.width),p.random(500, p.height), p.random(0,100) );
    }
}