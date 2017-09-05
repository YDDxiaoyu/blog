import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import pageIndex from '@/components/page/page_index'
//接口文档
import add_api from '@/components/page/api/api_insert'
import api_list_font from '@/components/page/api/api_list_font'
import api_list_back from '@/components/page/api/api_list_back'
import api_detail from '@/components/page/api/api_detail'
import api_amend from '@/components/page/api/api_amend'
//分类管理
import addClassOne from '@/components/page/class/add_class_one'
import addList from '@/components/page/class/add_list'
import addClassTwo from '@/components/page/class/add_class_two'

import addArticle from "@/components/page/class/add_article"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            component: index,
            children: [{
                path: '/',
                name: 'pageIndex',
                component: pageIndex
            }, {
                path: 'add_class_one',
                name: 'addClassOne',
                component: addClassOne
            }, {
                path: 'add_class_two',
                name: 'addClassTwo',
                component: addClassTwo
            }, {
                path: 'add_list',
                name: 'addList',
                component: addList
            }, {
                path: 'add_article',
                name: 'addArticle',
                component: addArticle
            }, {
                path: 'add_api',
                name: 'add_api',
                component: add_api,
            }, {
                path: 'api_list_font',
                name: 'api_list_font',
                component: api_list_font,
            }, {
                path: 'api_list_back',
                name: 'api_list_back',
                component: api_list_back,
            }, {
                path: 'api_detail',
                name: 'api_detail',
                component: api_detail,
            }, {
                path: 'api_amend',
                name: 'api_amend',
                component: api_amend,
            }]
        }
    ]
})