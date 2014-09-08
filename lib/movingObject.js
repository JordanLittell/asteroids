(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillColor = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos[0] %= Asteroids.Game.DIM_X;
    this.pos[1] %= Asteroids.Game.DIM_Y;
  };
})();