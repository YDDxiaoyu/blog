import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detaill from '@/components/detaill'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/detaill',
        name: 'detaill',
        component: detaill
    }]
})