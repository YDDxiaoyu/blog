<template>
   <div style="width:700px">
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h3>添加文章</h3>
<el-form-item label="标题" prop="article_name">
    <el-input type="text" v-model="ruleForm2.article_name" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="一级分类" prop="oneId">
  <el-select v-model="ruleForm2.oneId" placeholder="请选择" @change='changes(ruleForm2.oneId)'>
    <el-option
      v-for="item in options_fontorback"
      :key="item.id"
      :label="item.cnname"
      :value="item.id">
    </el-option>
  </el-select>
    
</el-form-item>
<el-form-item label="二级分类" prop="twoId">
  <el-select v-model="ruleForm2.twoId" placeholder="请选择">
    <el-option
      v-for="item in options_type"
      :key="item.id"
      :label="item.cnname"
      :value="item.id" >
    </el-option>
  </el-select>
</el-form-item>
<el-form-item label="作者" prop="editer">
    <el-input type="text" v-model="ruleForm2.editer" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="推荐" prop="tuijian">
     <el-radio class="radio" v-model="ruleForm2.recommend" label="1">是</el-radio>
    <el-radio class="radio" v-model="ruleForm2.recommend" label="2">否</el-radio>
</el-form-item>
<el-form-item label="状态" prop="state">
     <el-radio class="radio" v-model="ruleForm2.art_show" label="1">显示</el-radio>
    <el-radio class="radio" v-model="ruleForm2.art_show" label="2">隐藏</el-radio>
</el-form-item>
<el-form-item label="时间" prop="times">
     <el-date-picker
      v-model="ruleForm2.time"
      type="datetime"
      placeholder="选择日期时间" @change='timeChange'>
    </el-date-picker>
</el-form-item>
<el-form-item label="导读" prop="daodu">
    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="ruleForm2.daodu" :autosize='{ minRows: 2, maxRows: 10 }'>
</el-input>
</el-form-item>
<el-form-item label="内容" prop="">
    <div id="editor"></div> 
</el-input>
</el-form-item>
<el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
</el-form-item>
</el-form>
  </div>                 
</template>

<script>
    export default {
       data() {
            return {
                editor: null,
                options_fontorback: [],
                options_type: [],
                data:[],
                ruleForm2: {
                    article_name: "",
                    oneId: "",
                    twoId: "",
                    enname_one: "",
                    daodu: "",
                    time: '',
                    recommend: '1',
                    art_show: '1',
                    content:"",
                    editer:''
                },
                rules2: {
                    article_name: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    editer: [{
                        required: true,
                        message: '请输入作者',
                        trigger: 'blur'
                    }],
                    daodu: [{
                        required: true,
                        message: '请输入导读内容',
                        trigger: 'blur'
                    }]
                }
            };
        },
        props: {
            defaultMsg: {
                type: String
            },
            config: {
                type: Object
            }
        },
        mounted(){
            this.editor = UE.getEditor('editor');
            var _this=this
            this.axios.get('/api/back_article/getClass').then(function(data){
                _this.data=data.data.data;
                _this.options_fontorback=data.data.data[0] 
                data.data.data[1].forEach(function(val,i){
                        if(data.data.data[0][0].id==val.parent_id){
                           _this.options_type.push(val)
                        }  
                }) 
            })
        },
        methods: {
            timeChange(times){
                this.ruleForm2.time=times;
            },
            changes(parentId){
                var _this=this;
                _this.options_type=[]
                this.ruleForm2.twoId="";
                for(var i in this.data[1]){
                    if(this.data[1][i].parent_id==parentId){
                        _this.ruleForm2.enname_one=this.data[1][i].enname
                         _this.options_type.push(this.data[1][i])
                    }
                }
                for(var i in this.data[0]){
                    if(this.data[0][i].id==parentId){
                        _this.ruleForm2.enname_one=this.data[0][i].enname
                    }
                }
            },
            submitForm(formName) {
                this.ruleForm2.content=this.editor.getContent();
                console.log(this.ruleForm2)
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        // alert('submit!');

                        this.axios.post("/api/back_article/addArticle", this.ruleForm2).then(function(data) {
                            console.log(data.data)
                            if (data.data.code == "3011") {
                                this.open2()
                                var _this = this
                                setTimeout(function() {
                                    // _this.$router.go(0)
                                }, 1000)

                            } else {
                                this.open4()
                                console.log(data)
                            }

                        }.bind(this))

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，插入数据成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，插入数据失败');
            }
        },
        destroyed() {
            this.editor.destroy();
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