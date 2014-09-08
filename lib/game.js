(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
    
  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };
  
  Game.DIM_X = 500;
  Game.DIMY_Y = 500;
  Game.NUM_ASTEROIDS = 10;
  
  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < this.NUM_ASTEROIDS; i++){
      var asteroid = new Asteroids.Asteroid(this.randomPosition());
      this.asteroids.push(asteroid);
    }
  };
  
  Game.prototype.randomPosition = function() {
    return [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    for( var j = 0; j < this.asteroids.length; j++){
      this.asteroids[j].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function() {
    var length = this.asteroids.length;
    for(var i = 0; i < length; i++) {
      this.asteroids[i].move();
    }
  };
})();