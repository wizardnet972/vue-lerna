export default [
  {
    path: '',
    name: 'foo',
    component: () => import(/* webpackChunkName: "foo" */ './foo.vue')
  }
];
