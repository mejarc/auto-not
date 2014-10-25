describe('Auto-not', function(){
  var fixture = findAutoplay();

  describe('#findAutoplay()', function(){
    it('finds all DOM elements with an `autoplay` attribute', function(){
      expect(fixture).to.have.length(2);
    });
  });
  
describe('#reportPlaybackStatus()', function(){
  it('reports whether an element is paused or not', function(){
    var report = reportPlaybackStatus(fixture);
    expect(report).to.eq(false);
  });
});

  describe('#togglePlayback()', function(){
      xit('toggles playback on video and audio elements', function(){
        var item = fixture[0],
            itemOriginalAttr = item.getAttribute('autoplay');
        toggleAutoplay(item);
        var itemNewAttr = item.getAttribute('autoplay');
        expect(itemOriginalAttr).to.not.equal(itemNewAttr);
      });
    });

  // describe('adding listener', function(){
  //   it('attachs a keydown event to `document', function(){
  //     var listener = getEventListeners(document); // doesn't work outside of console???
  //     expect(listener).to.include('keydown');
  //   });
  // });

});