(function(){
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Utils = Asteroids.Utils = function () {};

  Utils.inherits = function (sup, sub) {
    function Surrogate () {};
    Surrogate.prototype = sup.prototype;
    sub.prototype = new Surrogate();
  };
})();