import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoryPage from '../pages/MemoryPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/memory'
  },
  { 
    path: '/memory',
    component: MemoryPage
  },
  {path: '/DetailPage', 
  component: ()=>import('../pages/DetailPage.vue')}
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
