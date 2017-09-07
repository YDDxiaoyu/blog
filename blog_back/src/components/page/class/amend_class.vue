<template>
     <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">  
        <h3>{{tittle}}</h3>
        <el-form-item label="中文类名" prop="cn">
            <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off" style='width:300px'></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="entwo">
            <el-input v-model.number="ruleForm2.enname_two" style='width:300px'></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            return {
                form: {
                    region: ''
                },
                ruleForm2: {
                    cnname_two: "",
                    enname_two: ""
                },
                sendForm:{},
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                },
                data: [],
                tittle:"",
                typeData:{
                    label:"",
                    url:""
                }
            }
        },
        created(){
            this.data=this.$route.query.data
            console.log(this.data)
            if(this.$route.query.type=='one'){
                this.tittle='修改一级类名'
                this.typeData.url='/api/back_class/amend_class_one'
                this.ruleForm2.enname_two=this.data.enname
                this.ruleForm2.cnname_two=this.data.cnname
                this.sendForm.oldenname_one=this.data.enname
                // console.log(this.data.enname)
            }else if(this.$route.query.type=='two'){
                this.tittle='修改二级类名'
                this.typeData.url='/api/back_class/amend_class_two'
                this.ruleForm2.enname_two=this.data.enname
                this.ruleForm2.cnname_two=this.data.cnname
                this.sendForm.oldenname_two=this.data.enname
            }
        },
        methods: {
            submitForm(formName) {
                // console.log(this.form.region)
                var _this = this;
                // console.log(this.ruleForm2)
                console.log(this.sendForm)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var sendData={}
                        if(_this.$route.query.type=='one'){
                            sendData.cnname_one=_this.ruleForm2.cnname_two,
                            sendData.enname_one=_this.ruleForm2.enname_two
                        }else{
                            sendData=_this.ruleForm2
                        }
                        Object.assign(_this.sendForm,sendData)
                        // alert('submit!');
                        console.log(_this.sendForm,_this.typeData.url)
                        
                        _this.axios.post(_this.typeData.url,_this.sendForm).then(function(data) {
                            if (data.data.code == '1052' || data.data.code == '1062') {
                                _this.$message({
                                    message: data.data.msg,
                                    type: 'success'
                                })
                            } else {
                                _this.$message({
                                    message: data.data.msg,
                                    type: 'error'
                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {

            // var that = this;
            // this.axios.get('/api/back_class/select_one_class').then(function(data) {
            //     that.data = data.data.data
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
</style>