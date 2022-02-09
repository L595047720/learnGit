<template>
    <div>
      <h1>学生模块</h1>
      <div style="width: 100%;height: 400px;background-color: antiquewhite;">
         <study>
              <study-title slot="study-title" :title="title"></study-title>
              <study-content slot="study-content" v-for="(item,index) in items"
                             :item="item" :index="index" v-on:remove="removeItem(index)" :key="index"></study-content>
         </study>
      </div>
      <Footer></Footer>
    </div>

</template>

<script>
    import Footer from "./Footer";

    export default {
        name: "Student",
        data(){
          return{
              title:"学习Vue",
              items:['十月','小明','张三',]
          }
        },
        methods:{
            removeItem:function (index) {
               this.items.splice(index,1)
            }
        },
      components: {Footer}
    }

</script>

<style scoped>

</style>
