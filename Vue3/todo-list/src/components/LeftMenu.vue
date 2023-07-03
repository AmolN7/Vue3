<template>
    <ul>
    <li v-for="menu in menuBar" :key="menu.id" :title="menu.short_description" ><router-link :to="menu.router_path" :class="[{ active: (menu.is_active)}]" @click="set_active(menu.id)"><strong>{{ menu.menu_name }}</strong></router-link></li> 
    
   </ul>
</template>

<script>
import { ref } from "vue";

export default {    
    
    setup(){
        let previous_active_id = 1;
        const menuBar = ref([
            { "id": 1, "menu_name": "Todo list","short_description":"Todo list","router_path":"/todo-list", "is_active":true,"is_visible": false },
            { "id": 2, "menu_name": "Task List","router_path":"/task-list","short_description":"Task List", "is_active":"", "is_visible": true }
    ]);
     
    const set_active = (id) =>{
        if (previous_active_id === id) return //no need to go further
            menuBar.value.find(menu => menu.id === previous_active_id).is_active = ''; //remove the active class from old active li 
            menuBar.value.find(menu => menu.id === id).is_active = true; //set active class to new li
            previous_active_id = id //store the new active li id

            //console.log(menuBar.value.find(menu => menu.router_path === '/task-list').id);
    };
    const set_active_byuri = (uri) =>{
        set_active(menuBar.value.find(menu => menu.router_path === uri).id);
    };
    return {
        menuBar,
        set_active,
        set_active_byuri     
    };
    },
    mounted(){
        if(window.location.pathname!='/'){
         this.set_active_byuri(window.location.pathname);
        }         
    }
}
</script>