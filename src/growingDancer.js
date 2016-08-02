var GrowingDancer = function(top, left) {
  Dancer.call(this, top, left, 5000); 
  this.$node.addClass('growing'); 
  //setInterval(this.pushOthers.bind(this), 200);
  this.pushOthers();
};
GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  setTimeout(function() {
    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    //this.$node.hide();
    this.setPosition(top, left);
    this.pushOthers();
  }.bind(this), 5000);
};

GrowingDancer.prototype.pushOthers = function() {

  var location = this.$node.position();
  var closeNodes = [];
  var xsum = 0;
  var ysum = 0;

  for (var i = 0; i < window.dancers.length; i++) {
    if (dancers[i].$node !== this.$node) {
      var nearby = dancers[i].$node.position();
      var distance = Math.sqrt((location.left - nearby.left) ^ 2 + (location.top - nearby.top) ^ 2); 
      if (distance < 200) {
        xsum = xsum + (location.left - nearby.left);
        ysum = ysum + (location.top - nearby.top);
      }
    }
  }

  var xposition = Math.min($('body').width() + 200, xsum * 0.1);
  var yposition = Math.min($('body').height() + 200, ysum * 0.1);

  if (xposition < 0) {
    xposition = 0;
  }
  if (yposition < 0 ) {
    yposition = 0;
  }

  this.$node.animate({
    top: xposition,
    left: yposition
  }, 5000);


  //measure distance to all other nodes
  //if node is within a threshold
    //add it to the proximity array
    //calculate movement vector
      //Will point AWAY from objects in proximity array
    //use setinterval with set position to animate the movement vector

};
