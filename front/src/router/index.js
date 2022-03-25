import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddItem from '../views/AddItem.vue';
import ItemDetailView from '../views/ItemDetailView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/additem',
    name: 'addItem',
    component: AddItem,
  },
  {
    path: '/detailitem',
    name: 'detailitem',
    component: ItemDetailView,
    children: [
      {
        path: '/:id',
        component: ItemDetailView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
