<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2 v-bind:id="dynamicId">Essential Links</h2>
    <ul>
        <li><a href="#/hello">HELLO</a></li>
    </ul>
    <button v-bind:disabled="someDynamicCondition">{{ type==0 ? '输入' : '输出' }}</button>
    <button v-if="seen" v-bind:disabled="someDynamicCondition">{{ type==0 ? '输入' : '输出' }}</button>
    <div>
        <h3>计算属性</h3>
        <p>{{ msg }}</p>
        <p>{{ reversedMessage }}</p>
    </div>
    <div>
        <h3>计算缓存</h3>
        <p>{{ now }}</p>
    </div>
    <div>
        <h3>class绑定</h3>
        <div v-bind:class="{active:isActive,'text-danger': hasError}">active</div>
    </div>
    <div>
        <h3>style绑定</h3>
        <div v-bind:style="{color:fontColor}">style绑定</div>
        <div v-bind:style="[style1,style2]">对象绑定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'This is a Test component',
      someDynamicCondition:true,
      dynamicId:'h2h2',
      type:1,
      seen:true,
      isActive:true,
      hasError:false,
      fontColor:"#05e",
      style1:{
        color:'#0e3',fontSize:'12px'
      },
      style2:{
        fontWeight:'bold'
      }
    }
  },
  computed:{
      reversedMessage:function(){
          return this.msg.split('').reverse().join('');
      },
      now:function(){
          return Date.now();
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
