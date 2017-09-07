// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-default/index.css"
import axios from 'axios'
import vueAxios from 'vue-axios'
import Vuex from "vuex"
import moduleA from "./store/module"

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(vueAxios, axios)
Vue.config.productionTip = false

var store = new Vuex.Store({
        modules: {
            a: moduleA
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})