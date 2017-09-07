<template>
  <div class="hello">
    <div class="center">
      <div class='up' v-focus:test='loginname'>
        账号：<input type="text" placeholder="请输入账号" v-model.lazy='loginname.val'>
      </div>
      <span style='color:red;display:block' v-if='loginname.state'>{{loginname.msg}}</span>
      
      <div class='down' v-focus:required='loginpw'>
        密码：<input type="text" placeholder="请输入密码" v-model.lazy='loginpw.val' @blur='fn(loginpw)'>
      </div>
      <span style='color:red;display:block' v-if='loginpw.state'>{{loginpw.msg}}</span>
      <button @click='login'>登录</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                loginname: {
                    val: '',
                    msgread: '您输入的账号有误',
                    msg: '您输入的账号不符合格式',
                    test: /^[a-zA-Z]+$/,
                    state: false
                },
                loginpw: {
                    val: '',
                    msgread: '您输入的账号有误',
                    msg: '您输入的账号不符合格式',
                    test: /^[a-zA-Z0-9]+$/,
                    blur: false
                }
            }
        },
        methods: {
            login() {
                var _this=this
                if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
                    this.axios.post('/api/back_class', {
                        loginname: this.loginname.val,
                        loginpw: this.loginpw.val
                    }).then(function(data) {
                        _this.$message(data.data.msg)
                        console.log(data.data.code)
                        if(data.data.code=='1001'){
                            console.log(111)
                            sessionStorage.setItem('name',_this.loginname.val)
                            sessionStorage.setItem('userId',data.data.userid)
                            _this.$router.push('/index')
                        }
                    })
                } else {
                   _this.$message('请填写正确的用户名和密码')
                }

            },
            fn(val) {
                val.blur = true;
            }
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var $p = el.getElementsByTagName('span')[0]
                    var vals = option.value.test
                    var $testState = vals.test(option.value.val)
                    if (option.value.val != "") {
                        if ($testState) {
                            option.value.state = false
                        } else {
                            option.value.state = true
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == 'required' && option.value.blur) {
                            option.value.state = true
                            option.value.msg = '不能为空'
                        } else {
                            option.value.state = false
                        }
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .center {
        width: 400px;
        height: 260px;
        border: 1px solid #ccc;
        border-radius: 6px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        text-align: center;
        padding-top: 50px;
    }
    
    .up,
    .down {
        border: 1px solid #ccc;
        width: 70%;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
    }
    
    input {
        border: none;
        height: 30px;
        outline: none;
    }
    
    button {
        height: 40px;
        width: 70%;
        background: orangered;
        color: #fff;
        border: none;
        outline: none;
        margin-top: 20px;
    }
</style>