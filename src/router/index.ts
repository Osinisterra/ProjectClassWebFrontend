import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserRegister from '../components/UserRegister.vue'
import UserLogin from '../components/UserLogin.vue'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // Redirige a la página de login al acceder a la raíz
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guardias de navegación para proteger las rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token') // Verifica si hay un token

  if (to.path === '/home' && !isAuthenticated) {
    // Si intenta acceder a home sin estar autenticado, redirige a login
    next('/login')
  } else {
    next() // Permitir el acceso a la ruta
  }
})

export default router
