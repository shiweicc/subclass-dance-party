var PacmanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pacman');
};

PacmanDancer.prototype = Object.create(Dancer.prototype);

PacmanDancer.prototype.constructor = PacmanDancer;

PacmanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// call the old version of step at the beginning of any call to this new version of step
// to invoke the step method from dancer superclass

// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.

// BlinkyDancer.prototype.changeColor = function() {
//   this.$node.css('border-color', 'yellow');
// };

