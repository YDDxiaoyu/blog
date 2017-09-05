<template>
   <div style="width:700px">
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h3>添加文章</h3>
<el-form-item label="标题" prop="title">
    <el-input type="text" v-model="ruleForm2.title" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="一级分类" prop="backorfont">
  <el-select v-model.number="ruleForm2.backorfont" placeholder="请选择">
    <el-option
      v-for="item in options_fontorback"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    
</el-form-item>
<el-form-item label="二级分类" prop="type">
  <el-select v-model.number="ruleForm2.type" placeholder="请选择">
    <el-option
      v-for="item in options_type"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>
  </el-select>
</el-form-item>
<el-form-item label="作者" prop="author">
    <el-input type="text" v-model="ruleForm2.author" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="推荐" prop="tuijian">
     <el-radio class="radio" v-model="radio" label="1">是</el-radio>
    <el-radio class="radio" v-model="radio" label="2">否</el-radio>
</el-form-item>
<el-form-item label="状态" prop="state">
     <el-radio class="radio" v-model="radio1" label="1">显示</el-radio>
    <el-radio class="radio" v-model="radio1" label="2">隐藏</el-radio>
</el-form-item>
<el-form-item label="时间" prop="times">
     <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
</el-form-item>
<el-form-item label="导读" prop="getparams">
    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="ruleForm2.getparams" :autosize='{ minRows: 2, maxRows: 10 }'>
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
                radio: '1',
                radio1: '1',
                value1: '',
                options_fontorback: [{
                    value: 'back',
                    label: '后台接口'
                }, {
                    value: 'font',
                    label: '前台接口'
                }],
                options_type: [{
                    value: 'get',
                    label: 'get'
                }, {
                    value: 'post',
                    label: 'post'
                }, {
                    value: 'formdata',
                    label: 'formdata'
                }],
                ruleForm2: {
                    title: "",
                    url: "",
                    backorfont: "",
                    type: "",
                    sendparams: "",
                    getparams: "",
                },
                rules2: {
                    title: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    author: [{
                        required: true,
                        message: '请输入作者',
                        trigger: 'blur'
                    }],
                    getparams: [{
                        required: true,
                        message: '请输入导读内容',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');

                        this.axios.post("/api/apilist", this.ruleForm2).then(function(data) {

                            if (data.data.code == "2000") {

                                this.open2()
                                var _this = this
                                setTimeout(function() {
                                    // _this.$router.go(0)
                                }, 1000)

                            } else {
                                this.open4()
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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