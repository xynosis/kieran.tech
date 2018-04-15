import Vue from 'vue'
import About from '@/components/About.vue'
import Thoughts from '@/components/Thoughts.vue'
import Projects from '@/components/Projects.vue'
import Papers from '@/components/Papers.vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      name: 'About',
      component: About
    }, {
      path: '/thoughts',
      name: 'Thoughts',
      component: Thoughts
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/papers',
      name: 'Papers',
      component: Papers
    }
  ]
})
