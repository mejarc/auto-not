describe('Auto-not', function(){
  var fixture = findAutoplay();

  describe('#findAutoplay()', function(){
    it('finds all DOM elements with an `autoplay` attribute', function(){
      expect(fixture).to.have.length(2);
    });
  });

  // describe('#removeAutoplay()', function(){
  //   it('removes all DOM elements with an `autoplay` attribute', function(){
  //     removeAutoplay(fixture);
  //     expect(findAutoplay()).to.have.length(0);
  //   });
  // });

  describe('#toggleAutoplay()', function(){
      it('toggles the autoplay attribute on those elements unfortunately given one', function(){
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