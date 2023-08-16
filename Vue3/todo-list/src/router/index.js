import { createWebHistory, createRouter } from "vue-router";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
const routes = [
    {
      path: "/",
      name: "HomePage",
      component: TodoList,
    },
    {
      path: "/todo-list",
      name: "TodoList",
      component: TodoList,
    },
    {
      path: "/todo-form",
      name: "TodoForm",
      component: TodoForm,
    },
    {
      path: "/todo-form-edit/:id",
      name: "TodoFormEdit",
      component: TodoForm,
    },
    {
        path: "/task-list",
        name: "TaskList",
        component: TaskList,
      },
      {
        path: "/task-form",
        name: "TaskForm",
        component: TaskForm,
      },
      {
        path: "/task-form-edit/:id",
        name: "TaskFormEdit",
        component: TaskForm,
      },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;