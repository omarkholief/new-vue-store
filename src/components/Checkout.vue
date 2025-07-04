<template>
  <div class="checkout">
    <h2>📦 إتمام الطلب</h2>

    <form @submit.prevent="submitOrder">
      <input v-model="name" type="text" placeholder="الاسم بالكامل" required />
      <input
        v-model="email"
        type="email"
        placeholder="البريد الإلكتروني"
        required
      />
      <input v-model="address" type="text" placeholder="العنوان" required />
      <button type="submit">✅ تأكيد الطلب</button>
    </form>

    <p v-if="orderSuccess" class="success">تم إرسال الطلب بنجاح! ✅</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
      orderSuccess: false,
    };
  },
  methods: {
    submitOrder() {
      if (this.name && this.email && this.address) {
        localStorage.removeItem("cart");
        this.orderSuccess = true;

        // إعادة التوجيه بعد 3 ثواني مثلاً
        setTimeout(() => {
          this.$router.push("/");
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: green;
  color: white;
  border: none;
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.success {
  color: green;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
