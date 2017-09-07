<template>
  <div class="wrap">
    <headers></headers> 
    <section> 
        <banner></banner>
        <div class="onetitle">
            博主 <span>ღ</span> 推荐
        </div>
      <div class="blogs">
          <left></left>
          <right></right>
        </div>
    </section>     
  </el-row>
  </div>
</template>

<script>
    import banner from './page/banner'
    import left from './page/detaill_left'
    import right from './page/right'
    import headers from './page/header'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
        },
        components: {
            banner,
            left,
            right,
            headers
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    
    .el-menu--dark {
        background-color: #222222;
        width: 70%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
    
    section {
        width: 1050px;
        margin: 0 auto;
        margin-top: 30px;
    }
    
    .el-row {
        width: 100%;
        overflow: hidden;
    }
    
    .el-row img {
        width: 100%;
    }
</style>