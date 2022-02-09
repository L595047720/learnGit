<template>
    <div>
        <h2>添加信息</h2>
        ID号:<input v-model="user.id" type="text"><br>
        姓名:<input v-model="user.name" type="text"><br>
        年龄:<input v-model="user.age" type="text"><br>
        <input type="button" @click="saveUserInfo" value="添加用户信息">
    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        data(){
            return{
                user:{}
            }
        },
        methods:{
            saveUserInfo:function () {
                console.log(this.user);
                this.$http.get("/static/data/data.json",this.user).then(res=>{
                    console.log(112);
                    console.log(res); 
                });                
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
