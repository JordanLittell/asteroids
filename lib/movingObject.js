(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function(options) {
    this.posX = options["pos"][0];
    this.posY = options["pos"][1];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillColor = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  };
})();