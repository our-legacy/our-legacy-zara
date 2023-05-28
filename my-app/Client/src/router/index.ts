import {createRouter, createWebHistory} from "vue-router";

import Home from "../components/Home.vue"
import search from "../components/search/search.vue"
import details from "../components/details/details.vue"
import Admincheck from "../components/AdminCheck.vue"
  
import Cart from "../components/cart.vue" 
import homeAdmin from "../components/AdminHome.vue"
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import adminsign from '../components/Adminsignup.vue'
import adminlog from '../components/Adminlog.vue'
import onePost from '../components/onePost.vue'
const routes = [

  {path: "/search",component: search},
  {path: "/details",component: details},
  {path: "/AdminCheck",component: Admincheck},

  { path: "/home", component: Home },
  { path: '/login', component: login },
  { path: '/signup', component: signup },
  { path: '/women/bag', component: onePost },
  { path: '/women/skirt', component: onePost },
  { path: '/women/perfume', component: onePost },
  { path: '/women/shoes', component: onePost },
  { path: '/women/top', component: onePost },
  { path: '/men/jeans', component: onePost },
  { path: '/women/jeans', component: onePost },
  { path: '/men/shoes', component: onePost },
  { path: '/men/perfume', component: onePost },
  { path: '/men/shirts', component: onePost },
  { path: '/products/men', component: onePost },
  { path: '/products/products', component: onePost },
  { path:"/cart", component: Cart},
  {path: "//homeAdmin", component: homeAdmin},   
  {path:'/adminsignup',component:adminsign },
  { path:'/adminlog',component:adminlog},
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router