<template>
<div class='contents'>
    
    <div class="texts">
        <h1>{{article_name}}</h1>
        <h2>作者：{{editer}}</h2>
        <div v-html='content'></div>
    </div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                content: "",
                article_name: '',
                editer: ""
            }
        },
        created() {
            console.log(this.$route.query.id)
            this.axios.get('/api/front_article/getArticleAll').then(function(data) {
                data.data.data.forEach(function(val) {
                    console.log(val)
                    if (val.id == this.$route.query.id) {
                        this.content = val.content
                        this.article_name = val.article_name
                        this.editer = val.editer
                    }
                }.bind(this))
            }.bind(this))
        }
    }
</script>
<style scoped>
    .contents {
        background-image: 100% 100%;
        width: 100%;
        height: 1184px;
        margin: 0px 10px 0 0;
        border-radius: 6px;
    }
    
    .titles {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #222222;
        background-size: 100%;
        background-position: 0 -182px;
        font-size: 16px;
        color: #fff;
        border-radius: 10px;
    }
    
    .texts {
        margin-top: 20px;
        background: #222222;
        width: 100%;
        height: 1124px;
        border-radius: 8px;
        padding: 0 10px;
        color: #ccc;
        box-sizing: border-box;
    }
    
    h1 {
        text-align: center;
        line-height: 45px;
        font-size: 25px;
    }
    
    h2 {
        font-size: 16px;
        padding-left: 460px;
    }
    
    .texts div {
        font-size: 14px;
        margin-bottom: 15px;
    }
</style>