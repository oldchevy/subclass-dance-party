var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinning');
};
SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;
SpinningDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
