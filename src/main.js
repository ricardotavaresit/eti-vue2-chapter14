import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index";

import store from "./store/index";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
