<template>
  <div>
    <!-- <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" /> -->
    <table >
    <tr>
        <th>No.</th>
        <th>Todo Name</th>
        <th>short Description</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
    <tr v-for="todo,index in todos" :key="todo.id">
        <td>{{index+1}}</td>
        <td>
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.todo_name }}</span>
        </td>
        <td class="left">
            <span>{{ todo.short_description }}</span>
        </td>
        <td> <button :class="[{ status_green: todo.completed}, { status_red: !todo.completed}]" ></button></td>
        <td><button @click="editTodo(todo.id)">Edit</button> | <button @click="removeTodo(todo.id)">X</button></td>
    </tr>
    <tr>
        <td colspan="5" v-if="todos.length<=0"><br/>No Record </td>
    </tr>
    </table>

    <div class="btn-holder">
      <router-link to="/todo-form"><button type="button"  >Add Todo</button></router-link>
        
    </div>
  </div>
   
</template>

<script>
import { ref } from 'vue';
import todoData from '../../data/todo.json'
 
export default {   
  setup() {
    const newTodo = ref('');
    const todos = ref(todoData);    

    const removeTodo = (id) => {
      const index = todos.value.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.value.splice(index, 1);
      }
    };
    const editTodo = (id) => {
      const index = todos.value.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        //load edit components
      }
    };

    return {
      newTodo,
      todos,       
      removeTodo,
      editTodo,
    };
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
button {
    margin:2px;
}
table{
    border: solid 1px black;
    width: 100%;
    
}
tr {
  border: solid 1px; 
  
}
.center {
  text-align:center;
}
.left {
  text-align:left;
}
.status_green {
    background-color:green;
    padding:10px;

}
.status_red {
    background-color:red;
    padding:10px;     
}
.btn-holder {
    margin-top:100px;
    justify-content: flex-end;
    display: flex;
}
</style>
