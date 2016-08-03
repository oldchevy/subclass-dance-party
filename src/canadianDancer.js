var CanadianDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('canadian');
  this.id = Math.random().toString();
  this.$node.attr('id', this.id);
  this.$node.append('<div class ="upper-half"><div class="head"><div class="head-top"><div class="hair"></div><div class="hair-right"></div><div class="eye-left"></div><div class="eye-right"></div>   </div>   <div class="head-bottom"></div>  </div>  <div class="torso"></div> <div class="arm left-arm"></div><div class="arm right-arm"></div></div><div class="lower-half"><div class="leg left-leg"></div><div class="leg right-leg"></div></div>'); 
  this.mouseListener();
};
CanadianDancer.prototype = Object.create(Dancer.prototype);
CanadianDancer.prototype.constructor = CanadianDancer;
CanadianDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle( 'bounce', { times: 1 }, 'slow' );
};
CanadianDancer.prototype.mouseListener = function() {
  
  var clicks = true;
  // console.log('The id is:', this.id);

  $('body').on('click', '.dancer.canadian', function(event) {
    //console.log("jQuery click:", $(this));
    //console.log('Target is:', event.target);
    if (clicks) {
      $('body').on('mousemove', function(event) {
        this.setPosition(event.pageY - 136, event.pageX - 75);
      }.bind(this));
      clicks = false;
    } else {
      $('body').off('mousemove');
      clicks = true;
    }

  }.bind(this));
};
