<template>
  <div >
       <h1>用户模块</h1>
       <div style="width: 100%;height: 200px;background-color: #42b983;text-align: center;padding: 100px 0px">
           <table border="1" style="margin: auto;" >
             <tr>
               <td>id</td>
               <td>name</td>
               <td>age</td>
               <td>操作</td>
             </tr>
             <tr v-for="user in users" :key="user.id">
               <td>{{user.id}}</td>
               <td>{{user.name}}</td>
               <td>{{user.age}}</td>
               <td><a href="javascript:;" @click="delRow(user.id)">删除</a>
                   <a href="javascript:;" @click="delRow(user.id)">修改</a>
               </td>
             </tr>
             <tr v-if="us.id==3">
               <td>{{us.id}}</td>
               <td>{{us.name}}</td>
               <td>{{us.age}}</td>
             </tr>
           </table>
         <a href="#/user/add">添加</a>
         <router-view/>
         </div>

      <Footer></Footer>
  </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
      name: "User",
      data(){
        return{
          users:[
            {id:1,name:"月总",age:1.5},
            {id:2,name:"xiaohai",age:23}
          ],
          us:[]
        }
      },
      methods:{
        findAll:function(){
          this.$http.get("/static/data/data.json",this.user).then(res=>{
            this.us = res.data;
          });
        },
        delRow(id){
          console.log(id);
          this.$http.get("/static/data/data.json?id="+id).then(res=>{
            console.log(res);
            this.findAll();
          });
        }
      },
      components: {Footer},
      created() {
        this.findAll();
      }
    }
</script>

<style scoped>

</style>
