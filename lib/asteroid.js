(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(game, pos) {
    var vel = [-Asteroid.MAX_SPEED + (Math.random() * (Asteroid.MAX_SPEED * 2)),
               -Asteroid.MAX_SPEED + (Math.random() * (Asteroid.MAX_SPEED * 2))
              ];
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
  
  Asteroid.MAX_SPEED = 10;
  Asteroid.COLOR = '#FFFFFF';
  Asteroid.RADIUS = 10;
  Asteroids.Utils.inherits(Asteroids.MovingObject, Asteroid);
})();