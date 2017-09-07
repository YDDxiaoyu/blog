// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import vueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-default/index.css"
// import vueQuillEditor from 'vue-quill-editor'

import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'


Vue.use(ElementUI)
Vue.use(vueAxios, axios)
    // Vue.use(vueQuillEditor)

Vue.config.productionTip = false
router.beforeEach(function(to, from, next) {
        if (to.name == "login") {
            next()
        } else {
            if (sessionStorage.getItem("userId")) {
                next()
            } else {
                next(false)
            }
        }

    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})