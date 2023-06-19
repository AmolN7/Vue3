<template>
  <div class="col4 layout">
  <ul>
    <li @click="clickTask(1)" ><strong>Todo List</strong></li>
    <li @click="clickTask(2)" ><strong>Task List</strong></li>
  </ul>
  </div>
  <div class="col8 layout">
    <TodoList v-show="isClicked==1" />
    <TaskList v-show="isClicked==2" />
    <TodoForm />
  </div>

</template>

<script>
import TodoList from './components/TodoList.vue';
import TaskList from './components/TaskList.vue';
import TodoForm from './components/TodoForm.vue';

export default {
  components: {
    TodoList,
    TaskList,
    TodoForm
  },
  data() {
    return {
      isClicked: 0,
    }
  },
  methods: {
    clickTask(tskId) {
      this.isClicked = tskId;
      //alert(this.isClicked);
    },
  },
  
};
</script>
<style>
.layout{
  float:left;
  padding: 10px;
  margin: 5px;
  border: solid 1px black;
  display: block;
  min-height: 500px;
}
.col4 {
  width: 15%; 
}
.col8 {
  width:75%;  
}
li{
  cursor:pointer;
}
</style>