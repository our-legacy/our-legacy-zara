import {createRouter, createWebHistory} from "vue-router";
//import the components he
import Home from "../components/Home.vue"

const routes =[    //call the components here
 {
    path: "/home",
     component: Home
 },
//  {path:"/WomenBlazer",
//  component: WomenBlazer},

]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router