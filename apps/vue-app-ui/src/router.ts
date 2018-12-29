import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import {routes as routesPackage1} from 'package1';
import {routes as routesPackage2} from 'package2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home1',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    ...routesPackage1,
    ...routesPackage2
  ],
});
