import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Main from './components/Main.vue'
import Vote from './components/vote/Vote.vue'
//import http from './plugins/Http.js'

import('./assets/style.scss')

const routes = [
  { path: "/", name: "Main", component: Main, },
  { path: "/vote", name: "Vote", component: Vote, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let _app = createApp(App)
_app.use(router)
//_app.use(http)
_app.mount('#app')
