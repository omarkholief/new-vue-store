<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProductList from "./components/ProductList.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    ProductList,
    Footer,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

#app {
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
