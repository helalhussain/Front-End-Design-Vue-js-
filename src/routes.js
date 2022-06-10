import {createWebHistory,createRouter} from 'vue-router'
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Home from './components/Home.vue';


const routes =[
    {
        name:'Signin',
        path:'/',
        component:Signin
    },
    {
        name:'Signup',
        path:'/signup',
        component:Signup
    },
     {
        name:'Home',
        path:'/home',
        component:Home
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;