(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos) {
    var vel = [Math.random() * 5, Math.random() * 5];
    // this.call(pos, vel, COLOR, RADIUS)
    Asteroids.MovingObject.call(this, 
      { pos: pos, vel: vel, color: this.COLOR, radius: this.RADIUS }
    );
  };

  Asteroid.COLOR = '#FFFFFF';
  Asteroid.RADIUS = 5;
    
  Asteroids.Utils.inherits(Asteroids.MovingObject, Asteroid);
})();