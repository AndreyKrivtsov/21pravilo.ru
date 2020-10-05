import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './components/App.vue'

import Index from './pages/index.vue'
import New from './pages/new.vue'
import Vote from './pages/vote.vue'

import('./assets/style.scss')

window.config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost' : ''
}

const routes = [
  { path: "/", name: "index", component: Index, },
  { path: "/new", name: "new", component: New, },
  { path: "/vote", name: "Vote", component: Vote, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let app = createApp(App)
app.use(router)
app.mount('#app')
