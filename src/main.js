import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import Toast from 'components/common/Toast'
 
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
FastClick.attach(document.body)
Vue.use(Toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/loading.gif')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')
