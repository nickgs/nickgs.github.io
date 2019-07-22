export default function sketch (p) {
    var part = new Particle();
  
    p.setup = function () {
      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      p.createCanvas(width, height);
      p.background(p.color(255,255,255));

      p.noStroke();

      // for(var i = 0; i < p.canvas.height; i++) {
      //   p.circle(p.random(0,20),p.random(p.canvas.height), p.random(0,20));
      // }

    };
  
  
    p.draw = function () {
      p.noStroke();
      p.background(p.color(255,255,255, 3));
      p.fill("#8f1414");
      part.draw(p);
    };

    p.windowResized= function() {

      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      
      p.resizeCanvas(width, height);
      p.background(p.color("white"));
    }
  };

class Particle {
    constructor() {
        this.x = 50;
        this.y = 0;
    }

    draw = function(p) {
        p.circle(this.x,p.random(p.canvas.height), p.random(0,5));
        this.y++;
        this.x++;

        if(this.y > p.canvas.width) {
          this.y =  0;
          this.x = 50;
        }
    }
}