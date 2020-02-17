import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

//Material-icons
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax, {
  //options here
})

Vue.config.productionTip = false

import localStorageUtil from "@/mixins/localStorageUtil";
Vue.mixin(localStorageUtil);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
