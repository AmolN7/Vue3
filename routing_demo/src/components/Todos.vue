<template>  
  <div>
    <h1> Todo List </h1>
    <input type="text" name="newTodo" v-model="newTodo" /><button @click="addTodo">Add Todo</button>
    <br/>  <br/>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}           
            <button @click="toggleTodo(todo.id)">{{ (todo.isCompleted)?'Completed':'Not Completed' }}</button>
            <button @click="removeTodo(todo.id)">removeTodo</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            todos:[
                {id:1,text:'Todo 1',isCompleted:false},
                {id:2,text:'Todo 2',isCompleted:true},  
                {id:3,text:'Todo 3',isCompleted:false},
                {id:4,text:'Todo 4',isCompleted:true},
            ],
            todoCount:4,
             
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.trim() === ''){
                return; // Prevent adding empty todos
            }
            this.todos.push({id:this.todoCount+1,text:this.newTodo,isCompleted:false});
        },
        removeTodo(id){
            const newTodos = this.todos.filter(todo=>todo.id!== id);
            this.todos = newTodos;
            
        },
        toggleTodo(id){
            const todo = this.todos.find(todo=>todo.id === id);
            if(todo){
                todo.isCompleted = !todo.isCompleted;
            }
        }
    }

}
</script>