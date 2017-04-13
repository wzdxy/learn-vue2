<template>
  <div class="test" v-bind:style="{marginBottom:'100px'}">
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
    <div>
      <h3>v-for</h3>
      <ul id='v-for-1'>
        <li v-for="(item,index) in items">
        {{dynamicId}}:{{index}}:{{item.message}}
        </li>
      </ul>
      <h3>v-for遍历对象</h3>
      <ul>
        <li v-for="(value,key,index) in object">
          {{index}} {{key}} : {{value}}
        </li>
      </ul>
    </div>
    <div>
      <button v-on:click="greet">Greet</button>
    </div>
    <div>
      <h3>表单</h3>
      <input v-model="msg" placeholder="请输入">
      <p>Message is: {{ msg }}</p>
      <textarea v-if="seen" v-model="msg" placeholder="input 更新"></textarea>
      <textarea v-if="seen" v-model.lazy="msg" placeholder="懒更新"></textarea>
      <input id="checkbox1" type="checkbox" v-model="seen">
      <label for="checkbox1">{{seen?'可见':'有些元素被隐藏了'}}</label>
      <div>
        <span>多选：</span>
        <input type="checkbox" id="checkgroup1" v-model="checkedItems" value="item1">
        <label for="checkgroup1">item1</label>
        <input type="checkbox" id="checkgroup2" v-model="checkedItems" value="item2">
        <label for="checkgroup2">item2</label>
        <input type="checkbox" id="checkgroup3" v-model="checkedItems" value="item3">
        <label for="checkgroup3">item3</label>
        <input type="checkbox" id="checkgroup4" v-model="checkedItems" value="item4">
        <label for="checkgroup4">item4</label>
        <br><span>已选择：{{checkedItems}}</span>
        <ul>
          <li v-bind:style="{display:'block',border:'1px solid',margin:'2px'}" v-for="item in checkedItems">{{item}}</li>
        </ul>
      </div>
    </div>
    <div>
      <h3>组件</h3>
      <component-example></component-example>
      <c1></c1>
      <child1 message='我是来自 test.vue 的 prop 数据'></child1>
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
      },
      items:[
        {message:'A'},{message:'B'}
      ],
      object:{
        First:'AAA',Last:'BBB',And:'CCC'
      },
      checkedItems:[]
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
  methods:{
    greet:function(e){
      alert('Hello'+this.msg);
      alert(e.target.tagName);
    }
  }
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
