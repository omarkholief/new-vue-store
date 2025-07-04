<template>
  <div v-if="product" class="details">
    <img :src="product.image" alt="product" />
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>
        <strong>{{ product.price }} $</strong>
      </p>
      <button @click="addToCart" class="add-btn">🛒 أضف إلى السلة</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
  methods: {
    addToCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(this.product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("✅ تم إضافة المنتج إلى السلة!");
    },
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.details img {
  width: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
}
.info {
  text-align: center;
  max-width: 600px;
}

.add-btn {
  background-color: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.add-btn:hover {
  background-color: #0056b3;
}
</style>
