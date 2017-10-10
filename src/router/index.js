import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Login from '@/components/Login';
import About from '@/components/About';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
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
});
