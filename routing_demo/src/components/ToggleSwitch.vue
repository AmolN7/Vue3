<template>
    <div>
        <h1>Toggle Switch</h1>
        <input type="checkbox"   v-model="isChecked" />
        <span>{{ isChecked }}</span>
        <br>
        <button @click="toggleSwitch">{{ isToggled?'On':'Off' }}</button>
    </div>
</template>

<script  setup>
import { ref } from 'vue'
const isChecked = ref(false);
const isToggled = ref(false);
const toggleSwitch = () => {
    isToggled.value = !isToggled.value;
}

</script>
