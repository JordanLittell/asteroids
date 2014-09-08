(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function () {
    setInterval(this._loop, 20);
  };
  
  GameView.prototype._loop = function () {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  };
})();