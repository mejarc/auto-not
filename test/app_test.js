describe('Auto-not', function(){
  var fixture = findAutoplay();

  describe('#findAutoplay()', function(){
    it('finds all DOM elements with an `autoplay` attribute', function(){
      expect(fixture).to.have.length(2);
    });
  });
  
describe('#reportPlaybackStatus()', function(){
  it('reports whether an element is paused or not', function(){
    var report = reportPlaybackStatus(fixture[0]);
    expect(report).to.eq(true);  // TODO: why isn't this false? 
  });
});

  describe('#togglePlayback()', function(){
      it('toggles playback on autoplay video and audio elements', function(){
      var item = fixture[0],
          originalPlaybackStatus = reportPlaybackStatus(item);

        togglePlayback(item);
        
        var newPlaybackStatus = reportPlaybackStatus(item);
        expect(originalPlaybackStatus).to.not.equal(newPlaybackStatus);
      });
    });

});