<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 CryptoDashboard. All rights reserved.</p>
      <nav class="footer-menu">
        <router-link to="/btc">BTC</router-link>
        <router-link to="/eth">ETH</router-link>
        <router-link to="/sol">SOL</router-link>
        <router-link to="/xrp">XRP</router-link>
      </nav>
    </div>
    <div class="map-container" id="yandex-map"></div> 
  </footer>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.loadYandexMapsScript().then(() => {
      this.initYandexMap();
    }).catch(() => {
      console.error('Ошибка при загрузке Yandex Maps API');
    });
  },
  methods: {
    loadYandexMapsScript() {
      return new Promise((resolve, reject) => {
        if (typeof ymaps !== 'undefined') {
          resolve(); 
        } else {
          const script = document.createElement('script');
          script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
          script.async = true;
          script.onload = resolve;  
          script.onerror = reject;  
          document.head.appendChild(script); 
        }
      });
    },
    initYandexMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map("yandex-map", {
          center: [55.751574, 37.573856], 
          zoom: 10,
        });

        const placemark = new ymaps.Placemark([55.751574, 37.573856], {
          balloonContent: 'Москва, Россия',
        });

        map.geoObjects.add(placemark);
      });
    }
  }
};
</script>

<style scoped>
.map-container {
  height: 300px;
  width: 50%;
  margin-top: 20px;
  position: relative;
  margin: 0 auto;
}
.footer {
  background: #1f0f24;
  padding: 20px;
  text-align: center;
  color: #fff;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  font-family: 'Nabla', sans-serif;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-menu {
  display: flex;
  gap: 20px;
}

.footer-menu a {
  color: orange;
  text-decoration: none;
  font-weight: bold;
}
</style>
