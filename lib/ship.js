(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Ship = Asteroids.Ship = function(game) {
    var options = {
      game: game,
      pos: [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2], 
      vel: [0,0],
      radius: Ship.RADIUS,
      color: Ship.COLOR
    };
    
    Asteroids.MovingObject.call(this, options);
  }

  Ship.RADIUS = 5;
  Ship.COLOR = "#FF0000";

  Asteroids.Utils.inherits(Asteroids.MovingObject, Ship);
  
  Ship.prototype.relocate = function() {
    this.pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2];
    this.vel[0] = this.vel[1] = 0;
  };
  
  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
})();