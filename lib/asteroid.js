(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(game, pos) {
    var vel = [1 + (Math.random() * 3), 1 + (Math.random() * 3)];
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
  Asteroid.RADIUS = 5;
  Asteroids.Utils.inherits(Asteroids.MovingObject, Asteroid);
})();