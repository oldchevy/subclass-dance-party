(function() {
  window.behaviors = {};

  behaviors.lineUp = function(elements) {

    var height = $('body').height();
    var forwards = $('body').width() / 2;
    var backwards = $('body').width() / 2 - 100;

    for (var i = 0, l = elements.length; i < l; i++) {
      if (i % 2 !== 0) {
        elements[i].setPosition(height - 300, forwards);
        forwards += Math.min($('body').width() / elements.length, 100);
      } else {
        elements[i].setPosition(height - 300, backwards);
        backwards -= Math.min($('body').width() / elements.length, 100);
      }
    }

    
  };

})();