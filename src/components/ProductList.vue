<template>
  <div class="products-page">
    <div class="search-wrapper">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 ابحث عن منتج..."
        class="search-input"
      />
    </div>

    <div class="products">
      <div v-for="product in filteredProducts" :key="product.id" class="card">
        <router-link :to="`/product/${product.id}`">
          <img :src="product.image" alt="product" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.price }} $</p>
        </router-link>

        <button @click="addToWishlist(product)" class="fav-btn">❤</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      loading: true,
      search: "",
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        this.loading = false;
      });
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    addToWishlist(product) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const exists = wishlist.find((item) => item.id === product.id);

      if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("✅ تمت إضافة المنتج إلى المفضلة!");
      } else {
        alert("⚠ المنتج موجود بالفعل في المفضلة.");
      }
    },
  },
};
</script>

<style scoped>
.products-page {
  padding: 1rem;
}

.search-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
}
.search-input:focus {
  border-color: #ccc;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.02);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.fav-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
</style>
