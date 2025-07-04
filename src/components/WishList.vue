<template>
  <div class="wishlist">
    <h2>❤ المفضلة</h2>

    <div v-if="wishlist.length === 0">
      <p>لا توجد منتجات في المفضلة.</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in wishlist" :key="index" class="card">
        <img :src="item.image" alt="product" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} $</p>
        <button @click="removeFromWishlist(index)">❌ إزالة</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wishlist: [],
    };
  },
  mounted() {
    const stored = localStorage.getItem("wishlist");
    this.wishlist = stored ? JSON.parse(stored) : [];
  },
  methods: {
    removeFromWishlist(index) {
      this.wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    },
  },
};
</script>

<style scoped>
.cart,
.wishlist {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

.card,
.cart-item {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.card img,
.cart-item img {
  width: 100px;
  object-fit: contain;
}

.card h3,
.cart-item h3 {
  margin: 0;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}

button:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 600px) {
  .card,
  .cart-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
