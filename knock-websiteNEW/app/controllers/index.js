import Ember from 'ember';
const { Controller, inject } = Ember;

export default Controller.extend({
  metrics: inject.service(),

  actions: {
    pressed() {
      Ember.$('.overlay').fadeIn(500);
      Ember.$('#modal_form').fadeIn(500);
    },

    pressed2() {
      Ember.$('#modal_form-2').fadeIn(500);
    },

    close() {
      Ember.$('#modal_form').fadeOut(500);
      Ember.$('#modal_form-2').fadeOut(500);
      Ember.$('.overlay').fadeOut(500);
    },

    close2() {
      Ember.$('#modal_form').fadeOut(500);
      Ember.$('#modal_form-2').fadeOut(500);
      Ember.$('.overlay').fadeOut(500);
    },

    pressedOverlay() {
      Ember.$('#modal_form').fadeOut(500);
      Ember.$('#modal_form-2').fadeOut(500);
      Ember.$('.overlay').fadeOut(500);
    },

    down() {
      const scroll_el = $('.block-2');
      if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
      }
    },

    signUp() {
      this.get('metrics').trackEvent({ 'event': 'Try Knock - Clicked' });
      let distinctId = window.mixpanel.get_distinct_id();
      let link = `https://app.getknock.io/#/sign-up?distinct_id=${distinctId}`;
      window.open(link, "_blank");
    }
  }
});
