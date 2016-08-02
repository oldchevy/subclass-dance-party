var GrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  setTimeout(function() {
    this.$node.addClass('growing');
  }.bind(this), 200);
  //this.$node.addClass('growing');
};
GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  setTimeout(function() {
    this.$node.hide();
  }.bind(this), 5000);
};
