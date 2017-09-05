<template>
    <div class="mainBox">
        <h2>欢迎来到个人博客管理中心</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        padding-top: 100px;
        text-align: center;
        font-size: 30px;
    }
</style>