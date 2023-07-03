<template>
  <div>
    <div class="box">    
      <table>
          <thead>
            <tr>
                <th>No.</th>
                <th class="left pl-20">Todo Name</th>
                <th class="left pl-20">short Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
          </thead>
        <tbody>
        <tr v-for="todo,index in todos" :key="todo.id">
            <td>{{index+1}}</td>
            <td class="left pl-20">            
                <span :class="{ completed: todo.completed }">{{ todo.todo_name }}</span>
            </td>
            <td class="left pl-20">
                <span>{{ todo.short_description }}</span>
            </td>
            <td> <button :class="[{ status_green: todo.completed}, { status_red: !todo.completed}]" ><input type="checkbox" v-model="todo.completed" /></button></td>
            <td><i class="fas fa-pen-square"></i><router-link :to="`/todo-form-edit/${todo.id}`"><book-edit-outline title="Edit" class="icon green"></book-edit-outline></router-link>&nbsp;&nbsp;<trash-can-outline title="Delete" class="icon red" @click="removeTodo(todo.id)"></trash-can-outline></td>
        </tr>
        <tr>
            <td colspan="5" v-if="todos.length<=0"><br/>No Record </td>
        </tr>
      </tbody>
      </table>
    </div>
    <div class="btn-holder">
      <router-link to="/todo-form"><button type="button"  >Add Todo</button></router-link>
        
    </div>
  </div>
   
</template>

<script>
import { ref } from 'vue';
import todoData from '../../data/todo.json'
import { BookEditOutline, TrashCanOutline } from 'mdue';
export default {  
  components: { 
    BookEditOutline, 
    TrashCanOutline
  }, 
  setup() {
    const newTodo = ref('');
    const todos = ref(todoData);    

    const removeTodo = (id) => {
      const index = todos.value.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.value.splice(index, 1);
      }
    };    

    return {
      newTodo,
      todos,       
      removeTodo,
    };
  },
};
</script>
