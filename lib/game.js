(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
    
  var Game = Asteroids.Game = function() {
    this.ship = new Asteroids.Ship(this);
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

    var objs = this.allObjects();
    var length = objs.length;
    
    for (var i = 0; i < length; ++i) {
      objs[i].draw(ctx);
    }
  };
  
  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };
  
  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship);
  };
  
  Game.prototype.moveObjects = function() {
    var objs = this.allObjects();
    var length = objs.length;
    
    for(var i = 0; i < length; ++i) {
      objs[i].move();
    }
  };
  
  Game.prototype.checkCollisions = function () {
    var objs = this.allObjects();
    var length = objs.length;
    
    for (var i = 0, obj_1 = objs[i]; i < length; obj_1 = objs[++i]) {
      for (var j = i + 1, obj_2 = objs[j]; j < length; obj_2 = objs[++j]) {
        if (obj_1.collidesWith(obj_2)) {
          if (obj_1 instanceof Asteroids.Ship || 
              obj_2 instanceof Asteroids.Ship) {            
            this.ship.relocate();
          } else {
            console.log("asteroid collision");
          }
        }
      }
    }
  };
  
  Game.prototype.wrap = function(pos) {
    pos[0] %= Game.DIM_X;
    pos[1] %= Game.DIM_Y;
    return pos;
  };
})();