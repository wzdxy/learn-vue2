// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import c1 from './components/Component1.vue'
import child1 from './components/Child.vue'


Vue.config.productionTip = false

Vue.component('component-example',{
  template:'<div v-bind:style="style">This is A custom component!<br>{{msg}}</div>',
  data:function(){
    return{msg:'我是一个组件，我来自main.js中的定义',style:{border:"1px solid",margin:"2px"}}
  }
})

Vue.component('c1',c1);
Vue.component('child1',child1);

/* eslint-disable no-new */
window.vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
