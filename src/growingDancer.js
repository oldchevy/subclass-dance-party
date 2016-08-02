var GrowingDancer = function(top, left) {
  Dancer.call(this, top, left, 5000);
  setTimeout(function() {
    this.$node.addClass('growing');
  }.bind(this), 50);
  //this.$node.addClass('growing');
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
  }.bind(this), 5000);
};
