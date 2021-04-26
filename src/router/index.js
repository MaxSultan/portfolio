import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/screens/Home';
import About from '@/screens/About';
import Contact from '@/screens/Contact';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }
  ]
})
