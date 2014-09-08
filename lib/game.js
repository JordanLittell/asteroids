(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
    
  var Game = Asteroids.Game = function() {
    this.ship = new Asteroids.Ship(this);
    this.asteroids = [];
    this.addAsteroids();
    this.bullets = [];
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 10;
  
  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++){
      var asteroid = new Asteroids.Asteroid(this, this.randomPosition());
      this.add(asteroid);
    }
  };
  
  Game.prototype.add = function(obj) {
    if(obj instanceof Asteroids.Bullet){
      this.bullets.push(obj);
    }
    if(obj instanceof Asteroids.Asteroid){
      this.asteroids.push(obj);
    }
  }
  
  Game.prototype.remove = function(obj) {
    if(obj instanceof Asteroids.Bullet){
      this.bullets.splice(obj, 1);
    }
    if(obj instanceof Asteroids.Asteroid){
      this.asteroids.splice(obj, 1);
    }
  }
  
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
    return this.asteroids.concat(this.ship).concat(this.bullets);
  };
  
  Game.prototype.moveObjects = function() {
    var objs = this.allObjects();
    var length = objs.length;
    
    for(var i = 0; i < length; ++i) {
      objs[i].move();
    }
  };
  
  Object.prototype.isA = function(what) {
    return (this instanceof what);
  }
  
  Game.prototype.checkCollisions = function () {
    var objs = this.allObjects();
    var length = objs.length;
    
    for (var i = 0, obj_1 = objs[i]; i < length; obj_1 = objs[++i]) {
      for (var j = i + 1, obj_2 = objs[j]; j < length; obj_2 = objs[++j]) {
        if (obj_1.collidesWith(obj_2)) {
          if (obj_1.isA(Asteroids.Asteroid) && obj_2.isA(Asteroids.Asteroid)) {
            obj_1.invertVel(obj_2);
          } else if (obj_1.isA(Asteroids.Asteroid) && obj_2.isA(Asteroids.Bullet) ||
                     obj_1.isA(Asteroids.Bullet) && obj_2.isA(Asteroids.Asteroid)) {
            this.remove(obj_1);
            this.remove(obj_2);
          } else if (obj_1.isA(Asteroids.Ship) && obj_2.isA(Asteroids.Asteroid) ||
                     obj_1.isA(Asteroids.Asteroid) && obj_2.isA(Asteroids.Ship)) {
            this.ship.relocate();
          }
        }
      }
    }
  };
  
  Game.prototype.wrap = function(pos) {
    if(pos[0] > Game.DIM_X) pos[0] = 0;
    if(pos[1]> Game.DIM_Y) pos[1] = 0;
    if(pos[0] < 0) pos[0] = Game.DIM_X;
    if(pos[1] < 0) pos[1] = Game.DIM_Y;
  };
})();