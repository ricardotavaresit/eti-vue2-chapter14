import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index"


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
