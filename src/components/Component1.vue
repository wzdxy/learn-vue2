<template>
    <div v-bind:style="{border:'2px solid #00f',margin:'2px'}" id="Component1">
        <p>{{msg}}</p>
        <textarea v-model="prop1" type="text"></textarea>
        <button v-on:click="counter += 1">{{counter}}</button>
        <child1 :message="prop1" v-on:count="addSelfCount"></child1>
        <child1 :message="prop2" v-on:count="addSelfCount"></child1>
        
    </div>
</template>


<script>

import child1 from './Child.vue'

export default {
    data:function(){
        return{
            msg:'我是一个组件，来自Component1.vue',
            prop1:'我是来自Component1的prop内容1',
            prop2:'我是来自Component1的prop内容2',
            counter:0
        }
    },
    methods:{
        addSelfCount:function(){
            this.counter+=1;
        }
    },
    components:{'child1':child1}
}
</script>
