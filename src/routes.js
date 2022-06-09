import {createWebHistory,createRouter} from 'vue-router'
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';


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
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;