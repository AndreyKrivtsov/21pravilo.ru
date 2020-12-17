import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import App from './components/App.vue'

import Index from './pages/Index.vue'
import New from './pages/New.vue'
import Vote from './pages/Vote.vue'
import NotFound from './pages/NotFound.vue'

import('./assets/style.scss')

window.config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost' : ''
}

const routes = [
  { path: '/', name: 'Index', component: Index, },
  { path: '/new', name: 'New', component: New, },
  { path: '/vote', name: 'Vote', component: Vote, },
  { path: '/:pathMatch(.*)*', component: NotFound, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let app = createApp(App)
app.use(router)
app.mount('#app')
