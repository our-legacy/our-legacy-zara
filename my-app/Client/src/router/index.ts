import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
const routes=[    //call the components here
 {
    path: "/home",
     component: Home
 },
//  {path:"/WomenBlazer",
//  component: WomenBlazer},    
{
    path: '/login',
    component: login
  },
  {
    path:'/signup',
    component:signup
  }
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router