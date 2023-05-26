import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import homeAdmin from "../components/AdminHome.vue"
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import adminsign from '../components/Adminsignup.vue'
import adminlog from '../components/AdminLog.vue'
const routes=[    //call the components here
 {
    path: "/home",
     component: Home
 },
//  {path:"/WomenBlazer",
//  component: WomenBlazer}, 
{
  path: "//homeAdmin",
   component: homeAdmin
},   
{
    path: '/login',
    component: login
  },
  {
    path:'/signup',
    component:signup
  },
  {
    path:'/adminsignup',
    component:adminsign
  },
  {
    path:'/adminlog',
    component:adminlog
  }
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router