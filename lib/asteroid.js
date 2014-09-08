(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(game, pos) {
    var vel = [ -5 + (Math.random() * 10), -5 + (Math.random() * 10)];
    Asteroids.MovingObject.call(this, 
      { 
        game: game,
        pos: pos, 
        vel: vel, 
        color: Asteroid.COLOR, 
        radius: Asteroid.RADIUS
      }
    );
  };

  Asteroid.COLOR = '#FFFFFF';
  Asteroid.RADIUS = 10;
  Asteroids.Utils.inherits(Asteroids.MovingObject, Asteroid);
})();