<template>
    <div class="heads">
        <el-menu theme="dark" :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
            <router-link to='/'><el-menu-item index="1">首页</el-menu-item></router-link>
            <span  v-for='(item,i) in allClass' :keys='i+2' @click='select(item)'><el-menu-item :index='i'>{{item.cnname}}</el-menu-item></span>
        </el-menu>
    </div>
</template>
<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"
    export default {
        data() {
            return {
                activeIndex: '1',
                class: []
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            ...mapActions(['getClass']),
            select(data) {
                console.log(data)
            }
        },
        computed: {
            ...mapState({
                allClass: state => state.a.allClass
            })

        },
        mounted() {
            this.getClass(this)
                // allClass.forEach(function(val, i) {
                //     console.log(val)
                // })
        }
    }
</script>
<style>
    .el-menu--horizontal>.el-menu-item:hover,
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
    .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        border-bottom: 0px solid #222222;
    }
    
    .el-menu--horizontal.el-menu--dark .el-menu-item:hover,
    .el-menu--horizontal.el-menu--dark .el-submenu__title:hover {
        background-color: #222222;
    }
    
    .heads {
        background: #222222;
    }
    
    .el-menu {
        background: #222222;
    }
    
    .el-menu--dark {
        background-color: #222222;
        width: 70%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
</style>