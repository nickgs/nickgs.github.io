export default function sketch (p) {
    var part = new Particle();
  
    p.setup = function () {
      var canvasDiv = document.getElementById('myCanvas');
      var width = canvasDiv.offsetWidth;
      var height = canvasDiv.offsetHeight;
      p.createCanvas(width, height);

      p.noStroke();

      // for(var i = 0; i < p.canvas.height; i++) {
      //   p.circle(p.random(0,20),p.random(p.canvas.height), p.random(0,20));
      // }

    };
  
  
    p.draw = function () {
      p.noStroke();
      p.background(p.color(25,25,25, 3));
     // p.fill("#8f1414");
     part.draw(p);

    
      
    };
  };

class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    draw = function(p) {
        p.circle(this.y,p.random(p.canvas.height), p.random(0,5));
        this.y++;

        if(this.y > p.canvas.width) {
          this.y =  0;
        }
    }
}