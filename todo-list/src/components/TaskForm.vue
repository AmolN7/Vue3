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
import { ref,onBeforeMount } from 'vue'; 
import { useRouter, useRoute } from 'vue-router'
import ApiService from '../services/ApiService';
export default {
 
  setup() {
    const router = useRouter();
    const route = useRoute();
    const newTaskName = ref('');    
    const newTaskDesc = ref('');
    const newTaskCdate = ref('');
    const newTaskDdate = ref('');
    const tasks = ref([]);      
    
    const tdate = () => { 
      let d = new Date();      
      let curr_date = String(d.getDate()).padStart(2, '0');
      let curr_month = String(d.getMonth()).padStart(2, '0');
      let curr_year = d.getFullYear();
      let curr_hours = String(d.getHours()).padStart(2, '0');
      let curr_min = String(d.getMinutes()).padStart(2, '0');
      return curr_year+"-"+curr_month+"-"+curr_date+"T"+curr_hours+":"+curr_min;
    };
    const showdata = async(id=null) => {       
      if(id==null || id== undefined) return;        
        const resN = await ApiService.getApi(`/task/${id}`)
        tasks.value = await resN.json();                  
        newTaskName.value = tasks.value.task_name;                 
        newTaskDesc.value = tasks.value.description;
        newTaskCdate.value = tasks.value.cdate; 
        newTaskDdate.value = tasks.value.ddate;                         
    };
    const addTask = () => {          
       if (newTaskName.value.trim() !== ''           
           && newTaskDesc.value.trim() !== ''
           && newTaskCdate.value.trim() !== ''  
           && newTaskDdate.value.trim() !== ''          
           ) {        
        let newId = 1;
        if(tasks.value.length>0) {
          const getMaxID = (cod) => tasks.value.reduce((a,c)=>((+a[cod])<(+c[cod]))?c:a);
          newId = getMaxID('id').id +1; 
        }
        //console.log(newId);
        ApiService.postApi("/task",
          {
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
          ApiService.putApi(`/task/${id}`,
          {       
            task_name: newTaskName.value,           
            description: newTaskDesc.value,
            cdate: newTaskCdate.value,
            ddate: newTaskDdate.value,           
          }); 
        }    
        router.push('/task-list');        
    };
    
    onBeforeMount(async() => {  
      if(tasks.value.length===0) { 
        const res = await ApiService.getApi("/task")
        tasks.value = await res.json(); 
      } 
      newTaskCdate.value = tdate();  
      let id = (route.params.id != undefined)?route.params.id:null;
      if(id==null || id== undefined) return;       
       showdata(id);
        
    });
    return {
      newTaskName,
      newTaskCdate,
      newTaskDesc,
      newTaskDdate,
      tasks,
      onBeforeMount,
      addTask,
      editTask,
      showdata,
      tdate
    };
  },     
};
</script>