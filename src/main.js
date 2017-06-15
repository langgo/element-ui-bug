// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-default/reset.css'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.config.productionTip = true

Vue.use(ElementUI)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
