describe('diamondDancer', function() {

  var diamondDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    diamondDancer = new DiamondDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(diamondDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a setRotation function that makes its node rotate', function() {
    sinon.spy(diamondDancer, 'setRotation');
    diamondDancer.setRotation();
    expect(diamondDancer.setRotation.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(diamondDancer, 'step');
      expect(diamondDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(diamondDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(diamondDancer.step.callCount).to.be.equal(2);
    });
  });
});
