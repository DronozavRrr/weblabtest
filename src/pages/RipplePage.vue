<template>
  <div class="blocks">
    <div class="price">
      <div v-if="cryptoData">Price: ${{ cryptoData.price }}</div>
      <div v-else>Loading... </div>
    </div>
    <div class="cap">
      <div v-if="cryptoData">Market Cap: ${{ cryptoData.marketCap }}</div>
      <div v-else>Loading...</div>
    </div>
    <div class="volume">
      <div v-if="cryptoData">Volume: ${{ cryptoData.volume }}</div>
      <div v-else>Loading...</div>
    </div>
    <div class="dif">
      <div v-if="cryptoData">Change: {{ cryptoData.change }}%</div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    currency: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cryptoData: null, 
    };
  },
  watch: {
    currency: {
      immediate: true,
      handler(newCurrency) {
        this.$emit('currencySelected', newCurrency);
        this.fetchCryptoData(newCurrency);
      }
    }
  },
  methods: {
    async fetchCryptoData(currency) {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${"Ripple".toLowerCase()}`);
        const data = await response.json();
        const cryptoInfo = data[0];
        this.cryptoData = {
          price: cryptoInfo.current_price,
          marketCap: cryptoInfo.market_cap,
          volume: cryptoInfo.total_volume,
          change: cryptoInfo.price_change_percentage_24h
        };
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    }
  }
};
</script>

<style scoped>
.blocks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.price, .cap, .volume, .dif {
  width: 48%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 50px;
  background: #1f0f24;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
