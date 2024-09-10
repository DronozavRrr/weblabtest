<template>
  <div class="wrapper">
    <div class="crypto-header">
      <h1>{{ cryptoInfo.name }} ({{ cryptoInfo.symbol }})</h1>
      <ul class="menu">
        <li><router-link to="/btc">BTC</router-link></li>
        <li><router-link to="/eth">ETH</router-link></li>
        <li><router-link to="/sol">SOL</router-link></li>
        <li><router-link to="/xrp">XRP</router-link></li>
      </ul>
    </div>
    <div class="crypto-details-container">
      <div class="crypto-info">
        <img :src="cryptoInfo.image" alt="crypto image" class="crypto-image" />
        <div class="crypto-details">
          <p class="crypto-description">
            {{ cryptoInfo.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CryptoMenu",
  props: {
    cryptoInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  border-radius: 50px;
  background: #1f0f24;
  padding: 20px;
  box-sizing: border-box; /* Include padding in width calculation */
}

.crypto-header {
  position: relative;
  margin-bottom: 20px;
}

h1 {
  font-family: 'Nabla', sans-serif;
  text-align: left;
  font-size: 3em;
  color: orange;
  margin: 0;
}

.menu {
  list-style: none;
  display: flex;
  gap: 20px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline;
}

.menu a {
  color: orange;
  text-decoration: none;
  font-family: 'Oxanium', sans-serif;
  font-size: 20px;
  font-weight: bold;
}



.crypto-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.crypto-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.crypto-details {
  display: flex;
  flex-direction: column;
}

.crypto-description {
  color: #fff;
  font-size: 16px;
}

</style>
