describe('pacmanDancer', function() {

  var pacmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pacmanDancer = new PacmanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pacmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pacmanDancer.$node, 'toggle');
    pacmanDancer.step();
    expect(pacmanDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pacmanDancer, 'step');
      expect(pacmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pacmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pacmanDancer.step.callCount).to.be.equal(2);
    });
  });
});
