(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
    
  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 10;
  
  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      var asteroid = new Asteroids.Asteroid(this, this.randomPosition());
      this.asteroids.push(asteroid);
    }
  };
  
  Game.prototype.randomPosition = function() {
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);

    var length = this.asteroids.length;
    for (var i = 0; i < length; ++i) {
      this.asteroids[i].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function() {
    var length = this.asteroids.length;
    for(var i = 0; i < length; ++i) {
      this.asteroids[i].move();
    }
  };
  
  Game.prototype.wrap = function(pos) {
    pos[0] %= Game.DIM_X;
    pos[1] %= Game.DIM_Y;
    return pos;
  };
})();