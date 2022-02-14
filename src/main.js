import { createApp } from 'vue'
// import { createRouter, createWebHistory } from './vue-router'
// switch commented lines to use official vue-router
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ContentOne from './views/ContentOne.vue'
import ContentTwo from './views/ContentTwo.vue'
import FooterOne from './views/FooterOne.vue'
import FooterTwo from './views/FooterTwo.vue'

const routes = [
  {
    path: '/one',
    components: { default: ContentOne, footer: FooterOne }
  },
  {
    path: '/two',
    components: { default: ContentTwo, footer: FooterTwo }
  },
  {
    path: '/', redirect: '/one'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

createApp(App).use(router).mount('#app')
