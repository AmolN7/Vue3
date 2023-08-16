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
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ApiService from '../services/ApiService';
export default {
 
   setup() {
    const router = useRouter();
    const route = useRoute();
    const newTodoName = ref('');
    const newTodoSdesc = ref('');
    const newTodoDesc = ref('');
    const newTodoStat = ref('');
    const todos = ref([]); 

    const showdata = async(id=null) => {        
        if(id==null) return;
        const resN = await ApiService.getApi(`/todo/${id}`)
        todos.value = await resN.json();
        newTodoName.value = todos.value.todo_name;
        newTodoSdesc.value = todos.value.short_description;
        newTodoDesc.value = todos.value.description;
        newTodoStat.value = todos.value.completed;       
    };
    const addTodo = () => { 
       if (newTodoName.value.trim() !== '' 
           && newTodoSdesc.value.trim() !== ''
           && newTodoDesc.value.trim() !== ''           
           ) {
        let newId = 1;
        if(todos.value.length>0) {
          const getMaxID = (cod) => todos.value.reduce((a,c)=>((+a[cod])<(+c[cod]))?c:a);
          newId = getMaxID('id').id +1; 
        }
        newTodoStat.value = (!newTodoStat.value)?false:true;
        ApiService.postApi("/todo",
                              {  id: newId,
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
              newTodoStat.value = (!newTodoStat.value)?false:true;
              ApiService.putApi(`/todo/${id}`,
                              {   
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
    onBeforeMount(async() => {  
    if(todos.value.length===0) {
      const res = await ApiService.getApi("/todo")
      todos.value = await res.json(); 
    }
      //console.log(route.params.id );
      let id = (route.params.id)?route.params.id:null;
      showdata(id);
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
      onBeforeMount
    };
  },       
};
</script>