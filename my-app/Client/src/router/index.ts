import {createRouter, createWebHistory} from "vue-router";

import Home from "../components/Home.vue"
import search from "../components/search/search.vue"
import details from "../components/details/details.vue"

  
import Cart from "../components/cart.vue" 
import homeAdmin from "../components/AdminHome.vue"
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import adminsign from '../components/Adminsignup.vue'
import adminlog from '../components/Adminlog.vue'
import onePost from '../components/onePost.vue'
const routes=[    //call the components here
 {
    path: "/home",
     component: Home
 },

{
    path: "/search",
     component: search
 },
 {
    path: "/details",
     component: details
 },
 
 {path:"/cart",
 component: Cart},

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
    component:adminlog},
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