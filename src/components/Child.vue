<template>
    <div v-bind:style="{color:'#00b',border:'1px solid',margin:'10px'}" id="Child">
    
        <p>{{msg}},下面是从prop收到的内容：</p>
        <p>{{message}}</p>
        <button v-on:click="countt">{{counter}}</button>
    </div>
</template>


<script>
export default {
    props:['message'],
    data:function(){
        return{
            msg:'我是一个子组件，来自Child.vue',
            counter:0
        }
    },
    methods:{
        countt:function(){
            this.counter+=1;
            this.$emit('count');
            this.$emit('count');
        }
    }
}
</script>
