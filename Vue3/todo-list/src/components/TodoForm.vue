<template>
    <div class="frm">
    Todo Name
      <p><input type="text" placeholder="Todo Name" /> </p> 
      Short Description
      <p><input  type="text" placeholder="Short Description" /> </p> 
      Description
      <p><textarea>Short Description</textarea> </p> 
      Completed <input type="checkbox" />
      <div class="btn-holder">
        <button type="button">Add Todo</button>
      </div>
    </div>
    
</template>

<style>
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
</style>