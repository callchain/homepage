import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import  {i18n} from  './plugins/vue-i18n';
import store from './store'

Vue.config.productionTip = false

const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

Vue.prototype.isMobile = !!isMobile;

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  i18n,
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
