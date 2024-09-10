// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BitcoinPage from '../pages/BitcoinPage.vue';
import EthereumPage from '../pages/EthereumPage.vue';
import SolanaPage from '../pages/SolanaPage.vue';
import RipplePage from '../pages/RipplePage.vue';

const routes = [
    { path: '/', redirect: '/btc' },
    { path: '/btc', component: BitcoinPage },
    { path: '/eth', component: EthereumPage },
    { path: '/sol', component: SolanaPage },
    { path: '/xrp', component: RipplePage }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
