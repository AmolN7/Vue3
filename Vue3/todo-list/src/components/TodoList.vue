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
        <tr v-for="todo, index in todos" :key="todo.id" >
            <td>{{index+1}}</td>
            <td class="left pl-20">            
                <span :class="{ completed: todo.completed }">{{ todo.todo_name }}</span>
            </td>
            <td class="left pl-20">
                <span>{{ todo.short_description }}</span>
            </td>
            <td> <button :class="[{ status_green: todo.completed}, { status_red: !todo.completed}]" ><input type="checkbox"  @change="patchTodo(todo.id,!todo.completed);" /></button></td>
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
  import {onBeforeMount,onUpdated, ref } from 'vue'; 
  import { BookEditOutline, TrashCanOutline } from 'mdue';
  import ApiService from '../services/ApiService';
  export default {  
    components: { 
      BookEditOutline, 
      TrashCanOutline
    }, 
    setup() {
      //const router = useRouter();
      const newTodo = ref('');  
      let todos = ref([]);
      onBeforeMount(async() => {         
          if(todos.value.length===0) {          
            const res = await ApiService.getApi("/todo")
            todos.value = await res.json();
          }
      }) 
      onUpdated(async() => {
        const resN  = await ApiService.getApi("/todo")
        todos.value = await resN.json();
      })
      const patchTodo = (id,val) => {
        ApiService.patchApi(`/todo/${id}`,{completed: val})
      }
      const removeTodo = (id) => {       
        if(id) {
          ApiService.deleteApi(`/todo/${id}`); 
        }
      };  
      
      return {
        newTodo,
        todos,     
        removeTodo,
        patchTodo,
        onBeforeMount,
        onUpdated
      };
    },
  };
</script>
