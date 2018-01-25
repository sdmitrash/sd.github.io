import Ember from 'ember';
const { Component, run } = Ember;

export default Component.extend({
  didInsertElement() {
    run.scheduleOnce('afterRender', this, function() {
    	window.verticalScroller = function($elem) {
        let top = parseInt($elem.css("top"));
        let height = -2 * $(".scroll-container").height();
    
        if(top < height) {
          top =100 +  parseInt($(".scroll-container").css("height"));
          // top = 1000;
          $elem.css("top", top);
        }
          $elem.animate({ top: (parseInt(top) -100) }, 200, 'linear', function () {
            window.verticalScroller($(this))
          });
      }
    
      $('.scroll-container').mouseover(function(){
        $(".comment-block").each(function(){
          $(this).stop();
        });
      });
    
      $('.scroll-container').mouseleave(function(){
        $(".comment-block").each(function() {
          let j = parseInt($(this).css("top"));
          $(this).css("top", j);
          i += $(this).height()+ 60;
          window.verticalScroller($(this));
        });
      });
    
      let i = 0;
      $(".comment-block").each(function() {
        $(this).css("top", i);
        i += parseInt($(this).css("height"))+ 0;
        window.verticalScroller($(this));
      });
    });
  }
});
