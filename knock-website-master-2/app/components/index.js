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
        	function smenaCom(fn, ln) {
				$("div#"+(fn)).fadeOut(800);
				$("div#"+(ln)).fadeIn(700);
			}
			setTimeout(smenaCom,7000, 1, 4);
			setTimeout(smenaCom,14000, 2, 5);
			setTimeout(smenaCom,21000, 3, 6);
			setTimeout(smenaCom,28000, 4, 7);
			setTimeout(smenaCom,35000, 5, 8);
        });
    }
});
