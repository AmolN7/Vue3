<template>
    <div>
         
       <h1>Options Api</h1>
                    <br/><hr/>
    <br/><br/>
               <Counter />
               <br/><hr/>
    <br/><br/>
               <Todos />
               <br/><hr/>
    <br/><br/>
    <TableSort />
               <br/><hr/>   
    <br/><br/>
        
    </div>    
</template>
<script>
import Counter from '@/components/Counter.vue'
import Todos from '@/components/Todos.vue'
import TableSort from '@/components/TableSort.vue'
export default {
    components: {
        Counter,    
        Todos,
        TableSort
    }
}
</script>
