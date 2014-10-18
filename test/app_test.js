describe('Auto-not', function(){
  var fixture = findAutoplay();

  describe('#findAutoplay()', function(){
    it('finds all DOM elements with an `autoplay` attribute', function(){
      expect(fixture).to.have.length(2);
    });
  });

  describe('#removeAutoplay()', function(){
    it('removes all DOM elements with an `autoplay` attribute', function(){
      removeAutoplay(fixture);
      expect(findAutoplay()).to.have.length(0);
    });
  });

  describe('adding listener', function(){
    it('attachs a keydown event to `document', function(){
      var listener = getEventListeners(document); // doesn't work outside of console???
      expect(listener).to.include('keydown');
    });
  });

});