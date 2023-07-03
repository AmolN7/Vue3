<template>
    <div class="frm">
      Todo Name<span>*</span>
      <p><input v-model="newTodoName" type="text" placeholder="Todo Name" /> </p> 
      Short Description<span>*</span>
      <p><input  v-model="newTodoSdesc" type="text" placeholder="Short Description" /> </p> 
      Description<span>*</span>
      <p><textarea v-model="newTodoDesc" placeholder="Description"></textarea> </p> 
      Completed <input v-model="newTodoStat" type="checkbox" />
      <div class="btn-holder">
        <button v-if="!this.$route.params.id" type="button" @click="addTodo">Add Todo</button>
        <button v-if="this.$route.params.id" type="button" @click="editTodo(this.$route.params.id);">Update Todo</button>
      </div>
    </div> 
      
</template>

<script>
import { ref } from 'vue';
import todoData from '../../data/todo.json'
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
 
  setup() {
    const router = useRouter();
    const route = useRoute();
    const newTodoName = ref('');
    const newTodoSdesc = ref('');
    const newTodoDesc = ref('');
    const newTodoStat = ref('');
    const todos = ref(todoData);     
    
    const showdata = (id=null) => { 
        let tdIndex = todos.value.findIndex(todo=>todo.id==id);           
        newTodoName.value = todos.value[tdIndex].todo_name;
        newTodoSdesc.value = todos.value[tdIndex].short_description;
        newTodoDesc.value = todos.value[tdIndex].description;
        newTodoStat.value = todos.value[tdIndex].completed;       
    };
    const addTodo = () => { 
       if (newTodoName.value.trim() !== '' 
           && newTodoSdesc.value.trim() !== ''
           && newTodoDesc.value.trim() !== ''           
           ) {
        const newId = todos.value.length + 1;
        todos.value.push({
          id: newId,
          todo_name: newTodoName.value,
          short_description: newTodoSdesc.value,
          description: newTodoDesc.value,
          completed: newTodoStat.value,
        });
        newTodoName.value = newTodoSdesc.value = newTodoDesc.value ='';
        newTodoStat.value = false;
      }
      router.push('/todo-list');
    };     
    const editTodo = (id) => { 
        if (newTodoName.value.trim() !== '' 
            && newTodoSdesc.value.trim() !== ''
            && newTodoDesc.value.trim() !== ''           
            && id) {
              let tdIndex = todos.value.findIndex(todo=>todo.id==id);                               
              todos.value[tdIndex].todo_name= newTodoName.value;
              todos.value[tdIndex].short_description= newTodoSdesc.value;
              todos.value[tdIndex].description= newTodoDesc.value;
              todos.value[tdIndex].completed=newTodoStat.value;
              newTodoName.value = newTodoSdesc.value = newTodoDesc.value ='';
              newTodoStat.value = false;
            }        
        router.push('/todo-list');
    };
    onMounted(() => {      
      //console.log(route.params.id );
      showdata(route.params.id);
    });
    return {
      newTodoName,
      newTodoSdesc,
      newTodoDesc,
      newTodoStat,
      todos,
      addTodo,
      editTodo,
      showdata,
    };
  },       
};
</script>