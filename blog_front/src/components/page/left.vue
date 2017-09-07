<template>
    <div>
        <ul class="bloglist">
            <li v-for='item in everypage'>
                <div class="arrow_box">
                <div class="ti"></div>
                <!--三角形-->
                <div class="ci"></div>
                <!-- 圆形-->
                <router-link :to='{path:"/detaill",query:{id:item.id}}'><h2 class="title"><a href="/" target="_blank">{{item.article_name}}</a></h2></router-link> 
                <ul class="textinfo">
                    <a href="/"><img src="/static/img/s4.jpg"></a>
                    <p> {{item.daodu}}</p>
                </ul>
                <ul class="details">
                    <li class="likes"><a href="#">作者：{{item.editer}}</a></li>
                    <li class="comments"><a href="#">34</a></li>
                    <li class="icon-time"><a href="#">{{item.time}}</a></li>
                </ul>
                </div>
                <!-- arrow_box end  -->
            </li>
        </ul>
        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="alldata.length">
            </el-pagination>
        </div>
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
                currentPage4: 0, //当前显示页
                everypagelist: 5, //默认每页显示条数
                everypage: [] //每页的数据
            }
        },
        computed: {
            ...mapState({
                alldata: state => state.a.data
            })
        },
        mounted() {
            this.getData(this)
        },
        methods: {
            ...mapActions(['getData']),
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.everypage = this.alldata.slice(this.everypagelist * (val - 1), this.everypagelist * val)
            },
            details(data) {
                console.log(data)
            }
        }
    }
</script>
<style>
    .el-pagination {
        text-align: center !important;
    }
</style>