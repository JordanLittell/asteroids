(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    
    setInterval(function(){
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };
  
  GameView.prototype.bindKeyHandlers = function () {
    key('w', function () {
      this.game.ship.power([0, -1]);
    }.bind(this));
    key('s', function () {
      this.game.ship.power([0, 1]);
    }.bind(this));
    key('a', function () {
      this.game.ship.power([-1, 0]);
    }.bind(this));
    key('d', function () {
      this.game.ship.power([1, 0]);
    }.bind(this));
    key('z', function () {
      this.game.ship.fireBullets();
    }.bind(this));
  };
})();