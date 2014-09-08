(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Bullet = Asteroids.Bullet = function(game, pos,vel) {
    var options = {
      game: game,
      pos: pos, 
      vel: vel, 
      color : Bullet.COLOR, 
      radius: Bullet.RADIUS 
    } 
    
    Asteroids.MovingObject.call(this, options);  
  }

  Asteroids.Utils.inherits(Asteroids.MovingObject, Bullet);
  
  Bullet.prototype.isWrappable = false;
    
  Bullet.COLOR = "#00FF00";
  Bullet.RADIUS = 2;
})();