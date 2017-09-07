<template>
 <div class="container">
        <header>
            <div class="log">
                <p>个人博客</p>
            </div>
            <div class="welcome">
                当前登录账户：{{userName}}
            </div>
        </header>
        <div class="clear"></div>
        <main>
            <div class="pageLiat">
                <page-left></page-left>
            </div>
            <div class="pageContent">
                 <router-view ></router-view>
            </div>
           
            <!--<div class="pageContent">
                <page-content></page-content>
            </div>-->
        </main>
    </div>
</template>

<script>
    import pageLeft from './page/page_left'
    export default {
        name: 'hello',
        data() {
            return {
                activeNames: ['1'],
                userName: ""
            }
        },
        mounted() {
            this.userName = sessionStorage.getItem('name')
        },
        components: {
            pageLeft
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
    }
    
    .container header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #0671C2;
        color: #fff;
    }
    
    .container header .log {
        float: left;
    }
    
    .container header .welcome {
        float: right;
    }
    
    .container main {
        display: flex;
    }
    
    .container main .pageLiat {
        width: 15%;
    }
    
    .container main .pageContent {
        width: 85%;
    }
</style>