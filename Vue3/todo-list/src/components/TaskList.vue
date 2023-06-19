<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.text }}</span>
        <button @click="removeTask(task.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const newTask = ref('');
    const tasks = ref([
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
    ]);

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        const newId = tasks.value.length + 1;
        tasks.value.push({
          id: newId,
          text: newTask.value,
        });
        newTask.value = '';
      }
    };

    const removeTask = (id) => {
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.value.splice(index, 1);
      }
    };

    return {
      newTask,
      tasks,
      addTask,
      removeTask,
    };
  },
};
</script>
