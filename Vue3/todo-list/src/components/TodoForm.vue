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
import router from "@/router";
export default {
 
  setup() {
    const newTodoName = ref('');
    const newTodoSdesc = ref('');
    const newTodoDesc = ref('');
    const newTodoStat = ref('');
    const todos = ref(todoData);     
    
    const showdata = (id=null) => { 
        for (var i = 0; i < todos.value.length; i++) {
            if (todos.value[i].id == id) {            
                newTodoName.value = todos.value[i].todo_name;
                newTodoSdesc.value = todos.value[i].short_description;
                newTodoDesc.value = todos.value[i].description;
                newTodoStat.value = todos.value[i].completed;
                break;             
            }  
        }                
    };
    const addTodo = () => { 
       //console.log(newTodoName,newTodoSdesc,newTodoDesc,newTodoStat)
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
                for (var i = 0; i < todos.value.length; i++) {
                    if (todos.value[i].id == id) {            
                        todos.value[i].todo_name= newTodoName.value;
                        todos.value[i].short_description= newTodoSdesc.value;
                        todos.value[i].description= newTodoDesc.value;
                        todos.value[i].completed=newTodoStat.value;
                        break;             
                    }  
                }
                newTodoName.value = newTodoSdesc.value = newTodoDesc.value ='';
                newTodoStat.value = false;
            }        
        router.push('/todo-list');
    };
    
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
  mounted() {
    //console.log(this.$route.params.id);
    this.showdata(this.$route.params.id);
  },
   
};

</script>