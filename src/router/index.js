import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import About from '@/components/About';
import Auth from '@/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
  beforeEach(to, from, next) {
    if (Auth.user.authenticated) {
      next();
    } else {
      next('home');
    }
  },
});
