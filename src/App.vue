<template>
  <div id="app">
    <CryptoMenu :cryptoInfo="cryptoInfo" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import CryptoMenu from './components/CryptoMenu.vue';
import Footer from '@/components/Footer.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    CryptoMenu,
    Footer,
  },
  data() {
    return {
      selectedCurrency: 'bitcoin',
      cryptoInfo: {
        name: 'Bitcoin',
        symbol: 'BTC',
        image: '@/assets/images/btc.png',
        description: 'Bitcoin is a decentralized digital currency without a central bank or single administrator.',
      },
    };
  },
  mounted() {
    this.updateCryptoInfo(this.$route.path);
  },
  watch: {
    '$route.path'(newPath) {
      this.updateCryptoInfo(newPath);
    },
  },
  methods: {
    updateCryptoInfo(path) {
      const cryptoData = {
        '/btc': {
          name: 'Bitcoin',
          symbol: 'BTC',
          image: '/src/assets/images/btc.png',
          description: 'Bitcoin is a decentralized digital currency without a central bank or single administrator.',
        },
        '/eth': {
          name: 'Ethereum',
          symbol: 'ETH',
          image: '/src/assets/images/eth.png',
          description: 'Ethereum is an open-source, blockchain-based platform for decentralized applications.',
        },
        '/sol': {
          name: 'Solana',
          symbol: 'SOL',
          image: '/src/assets/images/sol.png',
          description: 'Solana is a highly performant blockchain supporting high throughput and low transaction costs.',
        },
        '/xrp': {
          name: 'Ripple',
          symbol: 'XRP',
          image: '/src/assets/images/ripple.png',
          description: 'Ripple is a digital payment protocol designed for fast, low-cost international transfers.',
        },
      };
      this.cryptoInfo = cryptoData[path] || cryptoData['/btc'];
    },
  },
};
</script>


<style>

</style>
