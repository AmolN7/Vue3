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
  min-height: 600px;
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
 
input[type="text"],  input[type="datetime-local"]{
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
 
.completed {
  text-decoration: line-through;
}
button {
    margin:2px;
}
table{
    border: solid 1px black;
    width: 100%;
    text-align:center;
}
tr {
  border: solid 1px;  
}
.status_green {
    background-color:green;
    padding:1px;

}
.status_red {
    background-color:red;
    padding:1px;     
}
.btn-holder {
    margin-top:100px;
    justify-content: flex-end;
    display: flex;
}
.center {
  text-align:center;
}
.left {
  text-align:left;
}
.pl-20 {
  padding-left: 20px;
}
.task_green {
    background-color:green;
    padding:10px;

}
.task_red {
    background-color:red;
    padding:10px;     
}
.task_yellow {
    background-color:yellow;
    padding:10px;     
}
</style>
