
<template>
 <div>
     <h1>Composition API</h1>
     <br/><hr/>
    <br/><br/>
    <CounterComp />
    <br/><hr/>
    <br/><br/>
    <TodosComp />
    <br/><hr/>
    <br/><br/>


 </div>
</template>

<script setup>
import CounterComp from '@/components/CounterComp.vue'
import TodosComp from '@/components/TodosComp.vue'
</script>
