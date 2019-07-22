export default function sketch (p) {
    var particles = []
    const NUM_PARTICLES = 100;
  
    p.setup = function () {
      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      p.createCanvas(width, height);
      p.background(p.color(255,255,255));
      p.noStroke();

      for(let i = 0; i <= NUM_PARTICLES; i++) {
        particles[i] = new Particle(p); 

        particles[i].draw(p);
      }

    };

    p.windowResized= function() {

      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      
      p.resizeCanvas(width, height);
      p.setup();
    }
  
  };

class Particle {
    constructor(p) {
        this.x = p.random(p.canvas.width);
        this.y = 0;
    }

    draw = function(p) {
        p.noStroke();
        p.background(p.color(255,255,255, 8));
        p.fill(p.color(73,111,135));
        p.rect(this.x,this.y, p.random(100), p.random(300));
        this.y++;
    }
}