<template>
  <div>
      <h1>主页模块</h1>
      <div style="width: 100%;height: 400px;background-color: red;">sd
        <table border="1" style="margin: auto;" > 
          <tr>
            <td>姓名</td>
            <td>id</td>
            <td>年龄</td>
          </tr>
          <tr>
            <td>{{this.user.name}}</td>
            <td>{{this.user.id}}</td>
            <td>{{this.user.age}}</td>
          </tr>

        </table>
      </div>
      <Footer></Footer>
  </div>

</template>
<script>

    import Footer from "./Footer";
    export default {
      name: "Home",
      data(){
        return{
          user:[]
        }
      },
      components: {Footer},
      created(){
          this.$http.get("/static/data/data.json").then((res)=>{
              console.log(res.data);
              this.user = res.data;
          });
      }
    }
</script>

