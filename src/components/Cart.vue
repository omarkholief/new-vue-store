<template>
  <div class="cart">
    <h2>🛒 سلة المشتريات</h2>

    <div v-if="cart.length === 0">
      <p>لا توجد منتجات في السلة.</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" alt="product" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }} $</p>
          <button class="remove-item-btn" @click="removeItem(index)">
            ❌ حذف
          </button>
        </div>
      </div>

      <div class="total">
        <strong>الإجمالي: {{ totalPrice }} $</strong>
      </div>
    </div>
    <router-link to="/checkout">
      <button class="checkout-btn">📦 إتمام الطلب</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    const stored = localStorage.getItem("cart");
    this.cart = stored ? JSON.parse(stored) : [];
  },
  computed: {
    totalPrice() {
      return this.cart
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    },
  },
  methods: {
    removeItem(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
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

.remove-item-btn {
  background-color: red;
}

button {
  background-color: green;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  cursor: pointer;
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
