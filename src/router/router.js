
import Edit_one from '@/pages/Edit_one.vue';
import List_one from '@/pages/List_one.vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    { 
        path:'/task/:id',
        component: Edit_one

},
{ 
    path:'/task',
    component: List_one

},
{ path: '/', 
 redirect: '/task' }

]

const router= createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;