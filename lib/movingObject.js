(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (options) {
    this.game = options["game"];
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
  };
  
  MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillColor = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  };
  
  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    
    this.game.wrap(this.pos);
  };
  
  MovingObject.prototype.collidesWith = function (otherObj) {
    var dy = Math.pow(this.pos[1] - otherObj.pos[1], 2);
    var dx = Math.pow(this.pos[0] - otherObj.pos[0], 2);
    var dc = Math.sqrt(dy + dx);
    
    return dc < (this.radius + otherObj.radius);
  };
  
  MovingObject.prototype.invertVel = function (obj1) {
    this.vel[0] *= -1;
    this.vel[1] *= -1;
    this.move();
    obj1.vel[0] *= -1;
    obj1.vel[1] *= -1;
    obj1.move();
  };
})();