import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import vuetify from './plugins/vuetify';
import vueHeadful from 'vue-headful';
import VueI18n from 'vue-i18n';
import CountryFlag from 'vue-country-flag';
import {data} from '@/lib/lang/index.js';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.component('vue-headful', vueHeadful);
Vue.component('country-flag', CountryFlag);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ja',
  messages: data,
});

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  i18n: i18n,
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
