<script setup>
import { ref } from 'vue'
const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
const reset = () => {
  count.value = 0;
};
</script>
<template>
    <div>
        <h1>Counter</h1>
        <button @click="increment">Increment</button>
        {{ count }}
        <button @click="decrement">Decrement</button>
        <p>
        <button @click="reset">Reset</button>
        </p>
    </div>
</template>