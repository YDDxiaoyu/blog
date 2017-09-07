<template>
    <div class="content">
        <table v-for='(items,ind) in data'>
            <thead>
                <tr>
                    <th>一级类名：{{items["onedata"]["cnname"]}}</th>
                    <th>标识：{{items["onedata"]["enname"]}}</th>
                    <th>文章数量：0</th>
                    <th><el-button type="warning" class="button" @click='ament("one",items["onedata"])'>修改</el-button>
                        <el-button type="danger"  class="button" @click='remove(items["onedata"])'>删除</el-button></th>
                </tr>    
            </thead>              
            <tbody>
                <tr v-for='(item,index) in items["twodata"]'>
                    <td>二级类名：{{item["cnname"]}}</td>
                    <td>标识：{{item["enname"]}}</td>
                    <td>文章数量：{{item["article_num"]}}</td>
                    <td><el-button type="warning" class="button" @click='ament("two",item)'>修改</el-button>
                        <el-button type="danger"  class="button" @click='removeList(items.onedata.id,item.id,items.onedata.enname,index,ind)'>删除</el-button></td>
                </tr>    
            </tbody> 
        </table>    
    </div>                 
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
        methods: {
            ament(type,data){
                if(type == 'one'){
                    this.$router.push({
                        path:'amend_class',
                        query:{
                            type:'one',
                            data:data
                        }
                    })
                }else{
                    this.$router.push({
                        path:'amend_class',
                        query:{
                            type:'two',
                            data:data
                        }
                    })
                }
            },
            remove(data){
                this.$router.go(0)
                this.axios.post('/api/back_class/delete_one',{
                    id:data.id,
                    enname_one:data.enname_one
                }).then(function(data){
                    console.log(data)
                })
            },
            removeList(oneId,twoId,enname,ind,index){
                 var that=this;
                this.$confirm('是否要删除此文件?', '提示', {
                cancelButtonText: '取消',
                confirmButtonText: '确定'
                }).then(() => {
                    that.axios.post('/api/back_class/delete_two',{enname_one:enname,oneId:oneId,twoId:twoId}).then(function(data){
                        if(data.data.code=='1071'){
                            that.$message({
                            type: 'success',
                            message: data.data.msg
                            });
                            that.data[index].twodata.splice(ind,1)
                            that.$router.go(0)
                        }else{
                            that.$message({
                            type: 'error',
                            message: data.data.msg
                            });
                        }

                    })
                }).catch(() => {
                that.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });

            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                var _this = vm;
                vm.axios.get('/api/back_class/class_list').then(function(data) {
                    _this.data = data.data.data;
                })
            })
            next()
        },  
        mounted() {
            // var _this = this;
            //     this.axios.get('/api/back_class/class_list').then(function(data) {
            //         _this.data = data.data.data;
            //     })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
    
    table {
        width: 860px;
        margin-top: 20px;
        border-collapse: collapse;
        margin-left:50px;
    }
    
    thead th {
        height: 40px;
        background: #65BCFC;
        color: #fff;
        text-align: left;
        border-bottom: 10px solid #fff;
        padding-left: 50px;
    }
    
    tbody td {
        background: #DBEDFB;
        text-align: center;
        height: 30px;
        text-align: left;
        font-size: 14px;
        padding-left: 50px;
    }
    
    .content {
        width: 860px;
    }
    
    .button {
        width: 60px;
        height: 25px;
        padding: 0;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
    }
    
    .button span {}
</style>