(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
    
  var Game = Asteroids.Game = function () {
    this.ship = new Asteroids.Ship(this);
    
    this.asteroids = [];
    this.createAsteroids();
    
    this.bullets = [];
    
    this.img = new Image();
    this.img.src = "spiral-galaxy.jpg"
    this.img.width = Game.DIM_X;
    this.img.height = Game.DIM_Y;
    
  };
  
  Game.DIM_X = Asteroids.Utils.getDocWidth(500); 
  Game.DIM_Y = Asteroids.Utils.getDocHeight(500);
  Game.NUM_ASTEROIDS = 15;
  
  Game.prototype.createAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; ++i) {
      this.add(new Asteroids.Asteroid(this, this.randomPosition()));
    }
  };
  
  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
  };
  
  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      var index = this.bullets.indexOf(obj);
      if (index > -1) {
        this.bullets.splice(index, 1);
      }
    } else if (obj instanceof Asteroids.Asteroid) {
      var index = this.asteroids.indexOf(obj);
      if (index > -1) {
        this.asteroids.splice(index, 1);
      }
    }
  };
  
  Game.prototype.randomPosition = function () {
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
  };
  
  Game.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, 0, 0);
    
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
    
    for (var i = 0; i < length; ++i) {
      objs[i].move();
    }
  };

  Object.prototype.isA = function (what) {
    return (this instanceof what);
  };
    
  Game.prototype.checkCollisions = function () {
    var objs = this.allObjects();
    var length = objs.length;

    var asteroid = Asteroids.Asteroid;
    var bullet = Asteroids.Bullet;
    var ship = Asteroids.Ship;
    
    for (var i = 0, obj1 = objs[i]; i < length; obj1 = objs[++i]) {
      for (var j = i + 1, obj2 = objs[j]; j < length; obj2 = objs[++j]) {
        if (obj1.collidesWith(obj2)) {
          if (obj1.isA(asteroid) && obj2.isA(asteroid)) {
            obj1.invertVel(obj2);
          } else if (obj1.isA(asteroid) && obj2.isA(bullet) || 
                     obj1.isA(bullet) && obj2.isA(asteroid)) {
            this.remove(obj1);
            this.remove(obj2);
          } else if (obj1.isA(ship) && obj2.isA(asteroid) || 
                     obj1.isA(asteroid) && obj2.isA(ship)) {
            this.ship.relocate();
          }
        }
      }
    }
  };
  
  Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0 || pos[0] > Game.DIM_X || pos[1] < 0 ||
            pos[1] > Game.DIM_Y);
  };
  
  Game.prototype.wrap = function (pos) {
    if(pos[0] > Game.DIM_X) pos[0] = 0;
    if(pos[1]> Game.DIM_Y) pos[1] = 0;
    if(pos[0] < 0) pos[0] = Game.DIM_X;
    if(pos[1] < 0) pos[1] = Game.DIM_Y;
  };
})();