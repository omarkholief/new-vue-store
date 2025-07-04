<template>
  <nav class="navbar">
    <router-link to="/">🏠 الرئيسية</router-link> |
    <router-link to="/cart">🛒 السلة</router-link> |
    <router-link to="/wishlist">❤ المفضلة</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
