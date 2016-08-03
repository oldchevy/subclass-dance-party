var GrowingDancer = function(top, left) {
  Dancer.call(this, top, left, 5000); 
  this.$node.addClass('growing'); 
  //setInterval(this.pushOthers.bind(this), 200);
  //this.pushOthers();
  this.generateColor();
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  setTimeout(function() {
    //var top = $('body').height() * Math.random();
    //var left = $('body').width() * Math.random();
    //console.log('top', top, 'left', left);
    //this.$node.hide();
    this.pushOthers();
    //this.setPosition(top, left);
  }.bind(this), 5000);
};

GrowingDancer.prototype.pushOthers = function() {

  var location = this.$node.position();
  //console.log(location);
  var closeNodes = [];
  var xsum = location.left;
  var ysum = location.top;

  for (var i = 0; i < window.dancers.length; i++) {
    var nearby = dancers[i].$node.position();
    var distance = Math.sqrt((location.left - nearby.left) ^ 2 + (location.top - nearby.top) ^ 2); 
    if (distance < 200) {
      xsum = xsum + (location.left - nearby.left);
      ysum = ysum + (location.top - nearby.top);
    }
  }

  if (xsum < 0) {
    xsum *= -1;
  }
  if (ysum < 0 ) {
    ysum *= -1;
  }

  var xposition = Math.min($('body').width() - 200, xsum);
  var yposition = Math.min($('body').height() - 200, ysum);

  xposition = xposition === $('body').width() - 200 ? $('body').width() * Math.random() : xposition;
  yposition = yposition === $('body').height() - 200 ? $('body').height() * Math.random() : yposition;


  console.log('location-x:', location.left, 'location-y:', location.top);
  console.log('XSum:', xsum, 'Ysum:', ysum, 'XPosit', xposition, 'Ypositon', yposition);

  this.$node.animate({
    top: yposition,
    left: xposition
  }, 5000);


  //measure distance to all other nodes
  //if node is within a threshold
    //add it to the proximity array
    //calculate movement vector
      //Will point AWAY from objects in proximity array
    //use setinterval with set position to animate the movement vector

};


GrowingDancer.prototype.generateColor = function() {
  colorArray = [[348, 85, 54],
                [40, 90, 61],
                [64, 100, 66],
                [115, 100, 64],
                [235, 76, 49]];
  var randomIndex = Math.floor(Math.random() * colorArray.length);
  var randCol = colorArray[randomIndex];
  var colorStr = 'hsla('+randCol[0]+','+randCol[1]+'%,'+randCol[2]+'%,0.65';
  this.$node.css('background-color', colorStr);
}