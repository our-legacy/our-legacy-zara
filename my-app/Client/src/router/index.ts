import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import Cart from "../components/cart.vue" 
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import onePost from '../components/onePost.vue'
const routes=[    //call the components here
 {
    path: "/home",
     component: Home
 },
 {path:"/cart",
 component: Cart},

//  {path:"/WomenBlazer",
//  component: WomenBlazer},    
{
    path: '/login',
    component: login
  },
  {
    path:'/signup',
    component:signup
  },
  { path:'/products/women ',
  component: onePost
  },
  { path:'/products/men ',
  component: onePost
  },
  { path:'/products/',
  component: onePost
  }
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router