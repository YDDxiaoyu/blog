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
    import left from './page/left'
    import right from './page/right'
    import headers from './page/header'

    export default {
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
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
    
    .onetitle {
        width: 65%;
        height: 40px;
        line-height: 40px;
        background: #222222;
        background-size: 100%;
        background-position: 0 -182px;
        font-size: 16px;
        color: #fff;
        border-radius: 10px;
        margin-top: 20px;
        padding-left: 20px;
    }
    
    .onetitle span {
        color: #fd6969;
        font-size: 20px;
    }
</style>