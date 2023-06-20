<template>
  <div class="col4 layout">
   <ul>
    <li><router-link to="/todo-list"><strong>Todo List</strong></router-link></li> 
    <li><router-link to="/task-list"><strong>Task List</strong></router-link></li>
   </ul>
  </div>
  <div class="col8 layout">
    <router-view />
  </div>  
</template>

<script>
 
export default {     
  
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
 
input[type="text"] {
    width: 90%;
    height:25px;
}
textarea {
    width: 90%;
    height:100px;
}
.btn-holder {
    margin-top:100px;
    justify-content: flex-end;
    display: flex;
}
.frm{
    padding: 10px;
}
.frm>span {
   color:red;
}
</style>