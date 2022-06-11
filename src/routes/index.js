import HomeComponent from "./../components/home/HomeComponent";
import TasksComponent from "./../components/tasks/TasksComponent";


export default [
  { path: '/', component: HomeComponent, name: 'home' },
  { path: '/tasks', component: TasksComponent, name: 'tasks' }
]
