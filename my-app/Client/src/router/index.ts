import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import Cart from "../components/cart.vue" 
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import onePost from '../components/onePost.vue'
const routes = [
  { path: "/home", component: Home },
  { path: '/login', component: login },
  { path: '/signup', component: signup },
  { path: '/women/bag', component: onePost },
  { path: '/products/men', component: onePost },
  { path: '/products/products', component: onePost },
  { path:"/cart", component: Cart}

 
 


 
 
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router