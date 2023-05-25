import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import Cart from "../components/cart.vue" 

const routes=[    //call the components here
 {
    path: "/home",
     component: Home
 },
 {path:"/cart",
 component: Cart},

]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router