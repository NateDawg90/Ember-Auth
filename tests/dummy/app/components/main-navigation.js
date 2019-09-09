import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session:        service('session'),
  sessionAccount: service('session-account'),

  actions: {
    login() {
      this.onLogin();
      // this.sendAction('onLogin');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
