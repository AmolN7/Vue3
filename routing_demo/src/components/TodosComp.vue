<template>
    <div>
        <h1>Todo List  </h1>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}
            <button @click="toggleTodo(todo.id)">{{ (todo.isCompleted)?'Completed':'Not Completed' }}</button>
            <button @click="removeTodo(todo.id)">Remove</button>
        </li>
    </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const todos = ref([
    { id: 1, text: 'Todo 1', isCompleted: false },
    { id: 2, text: 'Todo 2', isCompleted: true },
    { id: 3, text: 'Todo 3', isCompleted: false },
    { id: 4, text: 'Todo 4', isCompleted: true },
]);
const addTodo = () => {
    todos.value.push({ id: todos.value.length + 1, text: newTodo.value, isCompleted: false });
};
const removeTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
};
const toggleTodo = (id) => {
    const todo = todos.value.find(todo => todo.id === id);
    if (todo) {
        todo.isCompleted = !todo.isCompleted;
    }
};

</script>