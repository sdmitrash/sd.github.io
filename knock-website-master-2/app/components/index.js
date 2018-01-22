import Ember from 'ember';

export default Ember.Component.extend({  
    actions: {
        pressed: function() {
            this.$('.overlay').fadeIn(500);
            this.$('#modal_form').fadeIn(500);
        },
     	pressed2: function() {
            this.$('#modal_form-2').fadeIn(500);
        },
        close: function() {
            this.$('#modal_form').fadeOut(500);
			this.$('#modal_form-2').fadeOut(500);
			this.$('.overlay').fadeOut(500);
        },
        close2: function() {
            this.$('#modal_form').fadeOut(500);
			this.$('#modal_form-2').fadeOut(500);
			this.$('.overlay').fadeOut(500);
        },
        pressedOverlay: function() {
        	this.$('#modal_form').fadeOut(500);
			this.$('#modal_form-2').fadeOut(500);
			this.$('.overlay').fadeOut(500);
        },
        down: function() {
			var scroll_el = $('.block-2');
	        if ($(scroll_el).length != 0) {
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	        }
        }
    },
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
        	window.verticalScroller = function($elem) {
            var top = parseInt($elem.css("top"));
            var temp = -440;
            if(top < temp) {
                top = 600;
                $elem.css("top", top);
            }
            $elem.animate({ top: (parseInt(top) - 150) }, 6000, 'linear', function () {
              window.verticalScroller($(this))
            });
        }
        var i = 0;
        $(".for-com >.comment-block").each(function () {
              $(this).css("top", i);
              i += 150;
              window.verticalScroller($(this));
        });
        });
    }
});
