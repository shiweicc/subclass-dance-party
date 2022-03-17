var YDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

YDancer.prototype = Object.create(Dancer.prototype);

YDancer.prototype.constructor = YDancer;


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// call the old version of step at the beginning of any call to this new version of step

YDancer.prototype.step = function() {
  // to invoke the step method from dancer superclass
  Dancer.prototype.step.call(this);


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
