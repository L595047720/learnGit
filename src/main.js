// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.prototype.$http=axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component("study",{
  template:
    '<div>' +
    '<slot name="study-title"></slot>'+
    '<ul>' +
        '<slot name="study-content"></slot>' +
    '</ul>'+
    '</div>'

})
Vue.component("study-title",{
  props:['title'],
  template:'<div>{{title}}</div>'
})
Vue.component("study-content",{
  props:['item','index'],
  template:'<li>{{item}}---{{index}} <button @click="remove">删除</button></li>',
  methods:{
    remove:function (index) {
       this.$emit("remove",index)
    },

  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
