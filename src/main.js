import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './index.css';

//HIGHLIGHT
import TextHighlight from 'vue-text-highlight';
Vue.component('text-highlight', TextHighlight)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
