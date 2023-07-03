<template>
  <div class="col4 layout">
   <LeftMenu />
  </div>
  <div class="col8 layout">
    <router-view />
  </div>  
</template>

<script>
import "./assets/css/main.css" 
import LeftMenu from "./components/LeftMenu.vue"
export default { 
  components: {
    LeftMenu,
  },
  
};
</script>
