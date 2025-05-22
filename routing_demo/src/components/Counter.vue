<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
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

