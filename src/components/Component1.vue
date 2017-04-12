<template>
    <div id="Component1">{{msg}}<button v-on:click="count += 1">{{count}}</button></div>
    
</template>


<script>
export default {
    data:function(){
        return{
            msg:'我是一个组件，来自Component1.vue',
            count:0
        }
    },
    components:'Component1'

}
</script>
