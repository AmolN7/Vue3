<template>
    <div class="frm">
      Task Name<span>*</span>
      <p><input v-model="newTaskName" type="text" placeholder="Task Name" /> </p> 
      Description<span>*</span>
      <p><textarea v-model="newTaskDesc" placeholder="Description"></textarea> </p> 
      Created Date<span>*</span>
      <p><input :disabled="true"  v-model="newTaskCdate" type="datetime-local" placeholder="Task Name" /> </p> 
      Due Date<span>*</span>
      <p><input v-model="newTaskDdate" type="datetime-local" placeholder="Task Name" /> </p> 
      
      <div class="btn-holder">
        <button v-if="!this.$route.params.id" type="button" @click="addTask">Add Task</button>
        <button v-if="this.$route.params.id" type="button" @click="editTask(this.$route.params.id);">Update Task</button>
      </div>
    </div> 
      
</template>

<script>
import { ref } from 'vue';
import taskData from '../../data/task.json'
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
 
  setup() {
    const router = useRouter();
    const route = useRoute();
    const newTaskName = ref('');    
    const newTaskDesc = ref('');
    const newTaskCdate = ref('');
    const newTaskDdate = ref('');
    const tasks = ref(taskData);     
    const tdate = () => { 
      let d = new Date();      
      let curr_date = String(d.getDate()).padStart(2, '0');
      let curr_month = String(d.getMonth()).padStart(2, '0');
      let curr_year = d.getFullYear();
      let curr_hours = String(d.getHours()).padStart(2, '0');
      let curr_min = String(d.getMinutes()).padStart(2, '0');
      return curr_year+"-"+curr_month+"-"+curr_date+"T"+curr_hours+":"+curr_min;
    };
    const showdata = (id=null) => {           
        newTaskCdate.value = tdate();
        let tsIndex = tasks.value.findIndex(task=>task.id==id);             
        newTaskName.value = tasks.value[tsIndex].task_name;                 
        newTaskDesc.value = tasks.value[tsIndex].description;
        newTaskCdate.value = tasks.value[tsIndex].cdate;
        newTaskDdate.value = tasks.value[tsIndex].ddate;                         
    };
    const addTask = () => {          
       if (newTaskName.value.trim() !== ''           
           && newTaskDesc.value.trim() !== ''
           && newTaskCdate.value.trim() !== ''  
           && newTaskDdate.value.trim() !== ''          
           ) {
        const newId = tasks.value.length + 1;
        tasks.value.push({
          id: newId,
          task_name: newTaskName.value,           
          description: newTaskDesc.value,
          cdate: newTaskCdate.value,
          ddate: newTaskDdate.value,
           
        });
        newTaskName.value =  newTaskDesc.value = newTaskCdate.value = newTaskDdate.value ='';
        
      }
      router.push('/task-list');
    };     
    const editTask = (id) => { 
        if (newTaskName.value.trim() !== ''            
            && newTaskDesc.value.trim() !== ''           
            && newTaskCdate.value.trim() !== ''           
            && newTaskDdate.value.trim() !== ''           
            && id) {   
              let tsIndex = tasks.value.findIndex(task=>task.id==id);               
              tasks.value[tsIndex].task_name= newTaskName.value;                       
              tasks.value[tsIndex].description= newTaskDesc.value;
              tasks.value[tsIndex].cdate= newTaskCdate.value;
              tasks.value[tsIndex].ddate= newTaskDdate.value;            
              newTaskName.value =  newTaskDesc.value = newTaskCdate.value = newTaskDdate.value ='';             
              }        
        router.push('/task-list');
    };
    
    onMounted(() => {      
      //console.log(route.params.id );
      showdata(route.params.id);
    });
    return {
      newTaskName,
      newTaskCdate,
      newTaskDesc,
      newTaskDdate,
      tasks,
      addTask,
      editTask,
      showdata,
      tdate,
    };
  },     
};
</script>