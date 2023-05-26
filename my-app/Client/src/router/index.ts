import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'
import onePost from '../components/onePost.vue'
const routes = [
  { path: "/home", component: Home },
  { path: '/login', component: login },
  { path: '/signup', component: signup },
  { path: '/women/shirts', component: onePost },
  { path: '/products/men', component: onePost },
  { path: '/products/products', component: onePost }
  // Other routes
]; 


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router