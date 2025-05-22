<template>
    <div>
        <h1>Search Bar</h1>
        <input 
            type="text" 
            v-model="searchQuery" 
            @keypress="handleKeyPress" 
            @input="handleInputChange" 
            @keyup="handleKeyPress"
            placeholder="Search..." />
        <button @click="handleButtonClick">Search</button>
        <button @click="handleClearButtonClick">Clear</button>
        <ul>
            <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const searchQuery = ref('')
const searchResults = ref([])   
const search = () => {
    const data = ['Mango', 'Apple', 'Pineapple','Orange','Banana'] // Simulated data
    if (searchQuery.value) {
        searchResults.value = data.filter(item => item.toLowerCase().includes(searchQuery.value.toLowerCase()))
    }
    //  else {
    //     searchResults.value = data
    // }
    if (searchResults.value.length === 0) {
        searchResults.value = ['No results found']
    }
}
const clearSearch = () => {
    searchQuery.value = ''
    searchResults.value = []
}
const handleKeyPress = (event) => {
    //if (event.key === 'Enter') {
        search()
   // }
}
const handleButtonClick = () => {
    search()
}
const handleClearButtonClick = () => {
    clearSearch()
}
const handleInputChange = (event) => {
    searchQuery.value = event.target.value
}
</script>

<style>

</style>