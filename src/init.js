$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    // Try to trigger click event on specific dancer
    // dancer.$node.on('click', function(event) {
    //   console.log(event);
    //   $('.dancer').css('color', 'white');
    // });
  });

  $('.lineUpButton').on('click', function(event) {
    var top = 200;
    var left = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      Dancer.prototype.lineUp.call(window.dancers[i], top, left);
      top += 80;
    }
  });

  $('.interactionButton').on('click', function(event) {
    var allDancer = window.dancers.slice();
    for (var i = 0; i < window.dancers.length; i++) {
      var x1 = window.dancers[i].left;
      var y1 = window.dancers[i].top;
      var smallestDistance = 0;
      var x2, y2, currentDistance, tempWindowDancerTop, tempWindowDancerLeft, tempClosestDancerTop, tempClosestDancerLeft, closestDancer;

      var otherDancer = allDancer.slice();
      otherDancer.splice(i, 1);
      // var closestDancer = window.dancers[i];
      for (var j = 0; j < otherDancer.length; j++) {
        x2 = otherDancer[j].left;
        y2 = otherDancer[j].top;
        currentDistance = Number(Math.sqrt(((x1 - x2) ^ 2 ) + ((y1 - y2) ^ 2)));
        if (smallestDistance === 0 || currentDistance < smallestDistance) {
          smallestDistance = currentDistance;
          closestDancer = otherDancer[j];
        }
      }
      tempWindowDancerTop = window.dancers[i].top;
      tempWindowDancerLeft = window.dancers[i].left;
      tempClosestDancerTop = closestDancer.top;
      tempClosestDancerLeft = closestDancer.left;
      //debugger;
      Dancer.prototype.setPosition.call(window.dancers[i], tempClosestDancerTop, tempClosestDancerLeft);
      Dancer.prototype.setPosition.call(closestDancer, tempWindowDancerTop, tempWindowDancerLeft);
    }
  });

  // $('.interactionButton').on('click', function(event) {
  //   var allDancer = window.dancers.slice();

  //   var x1 = window.dancers[0].left;
  //   var y1 = window.dancers[0].top;
  //   var smallestDistance = 0;
  //   var x2, y2, currentDistance, tempWindowDancerTop, tempWindowDancerLeft, tempClosestDancerTop, tempClosestDancerLeft, closestDancer;

  //   var otherDancer = allDancer.slice();
  //   otherDancer.splice(0, 1);
  //   // var closestDancer = window.dancers[i];
  //   for (var j = 0; j < otherDancer.length; j++) {
  //     x2 = otherDancer[j].left;
  //     y2 = otherDancer[j].top;
  //     currentDistance = Number(Math.sqrt(((x1 - x2) ^ 2 ) + ((y1 - y2) ^ 2)));
  //     if (smallestDistance === 0 || currentDistance < smallestDistance) {
  //       smallestDistance = currentDistance;
  //       closestDancer = otherDancer[j];
  //     }
  //   }
  //   tempWindowDancerTop = window.dancers[0].top;
  //   tempWindowDancerLeft = window.dancers[0].left;
  //   tempClosestDancerTop = closestDancer.top;
  //   tempClosestDancerLeft = closestDancer.left;
  //   //debugger;
  //   Dancer.prototype.setPosition.call(window.dancers[0], tempClosestDancerTop, tempClosestDancerLeft);
  //   Dancer.prototype.setPosition.call(closestDancer, tempWindowDancerTop, tempWindowDancerLeft);
  // });
});
