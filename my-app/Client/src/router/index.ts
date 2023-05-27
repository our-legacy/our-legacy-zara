import {createRouter, createWebHistory} from "vue-router";

import Home from "../components/Home.vue"
import search from "../components/search/search.vue"
import details from "../components/details/details.vue"

const routes=[    
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
 
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router