<template>
  <div>
    <div class="box"> 
      <table>
        <thead>
          <tr>
              <th>No.</th>
              <th class="left pl-20">Task Name</th>
              <th class="left pl-20">Description</th>
              <th>Created Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task,index in tasks" :key="task.id">
              <td>{{index+1}}</td>
              <td class="left pl-20">            
                  <span>{{ task.task_name }}</span>
              </td>
              <td class="left pl-20">
                  <span>{{ task.description }}</span>
              </td>
              <td><span>{{formatDateTime(task.cdate)  }}</span></td>
              <td><span>{{formatDateTime(task.ddate)  }}</span></td>
                
              <td><button :class="[{ task_green: (calDays(task.ddate)>10)}, { task_red: (calDays(task.ddate)<=0)},{ task_yellow: (calDays(task.ddate)>0 && calDays(task.ddate)<=10)}]" ></button></td>
              <td><router-link :to="`/task-form-edit/${task.id}`"><book-edit-outline title="Edit" class="icon green"></book-edit-outline></router-link>&nbsp;&nbsp; <trash-can-outline title="Delete" class="icon red" @click="removeTask(task.id)"></trash-can-outline></td>
          </tr>
          <tr>
              <td colspan="7" v-if="tasks.length<=0"><br/>No Record </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="btn-holder">
      <router-link to="/task-form"><button type="button"  >Add task</button></router-link>
        
    </div>
  </div>
   
</template>

<script>
import {onBeforeMount,onUpdated, ref } from 'vue';
//import taskData from '../../data/task.json'
import ApiService from '../services/ApiService';
import { BookEditOutline, TrashCanOutline } from 'mdue';
export default {   
  components: { 
    BookEditOutline, 
    TrashCanOutline,
  }, 
  setup() {
    const newTask = ref('');
    const tasks = ref([]);    
    onBeforeMount(async() => {         
        if(tasks.value.length===0) {          
          const res = await ApiService.getApi("/task")
          tasks.value = await res.json();
        }
    })
    onUpdated(async() => {
      const resN = await ApiService.getApi("/task")
      tasks.value = await resN.json();
    })
    const removeTask = (id) => {
      if(id) {
        ApiService.deleteApi(`/task/${id}`); 
      }
    };
    const calDays = (dDate)=>{
      let currDate = new Date();
      dDate = new Date(dDate);
      let diffDays = parseInt((dDate - currDate) / (1000 * 60 * 60 * 24), 10); 
      return diffDays;
    };
    const formatDateTime = (dateTm) =>{      
      let d = new Date(dateTm);
      let curr_date = d.getDate();
      let curr_month = d.getMonth();
      let curr_year = d.getFullYear();
      let curr_hours = d.getHours();
      let curr_min = d.getMinutes();
      return curr_date + "-" + curr_month + "-" + curr_year+" "+curr_hours+":"+curr_min;
    };
    return {
      newTask,
      tasks,       
      removeTask,
      calDays,
      onUpdated,
      onBeforeMount,
      formatDateTime
    };
  },
  
};
</script>
