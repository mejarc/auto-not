describe('Auto-not', function(){
  describe('#findAutoplay()', function(){
    it('finds all elements on a page with an `autoplay` attribute', function(){
      var items = findAutoplay();
      expect(items).to.have.length(2);
    });
  });

});