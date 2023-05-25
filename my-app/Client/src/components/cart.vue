<template>
  <div class="shopping-cart">
    <div id="cart">Cart</div>
    <div class="column-labels">
      <div class="product-image">Image</div>
      <div class="product-details">Product</div>
      <div class="product-price">Price</div>
      <div class="product-quantity">Quantity</div>
      <div class="product-removal">Remove</div>
    </div>
    <div v-for="product in data" :key="product.products_id" class="product">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-details">
        <div class="product-title">{{ product.name }}</div>
        <p class="product-description">{{ product.description }}</p>
      </div>
      <div class="product-price">${{ product.price }}</div>
      <div class="product-quantity">
        <button @click="decreaseQuantity(product)">-</button>
        <input type="number" value="1" min="1"/>
        <button @click="increaseQuantity(product)">+</button>
      </div>
      <div class="product-removal">
        <button class="remove-product" @click="handleDelete(product.products_id)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

interface Product {
  products_id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export default {
  name: "Cart",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get<Product[]>("http://localhost:3000/products/products")
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(prod: number) {
      axios
        .delete(`http://localhost:4001/zara/cart/delete/${prod}/1`)
        .then(() => {
          this.fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    increaseQuantity(product: Product) {
      product.quantity++;
    },
    decreaseQuantity(product: Product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#cart {
  font-size: 20px;
  width: 40px;
  height: 40px;
  margin-top: 100px;
  padding-left: 2px;
  text-decoration-line: underline;
  text-align: center;
}

.shopping-cart {
  margin-top: 20px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 4px;
}

.column-labels {
  display: grid;
  grid-template-columns: 2fr 6fr 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.product {
  display: grid;
  grid-template-columns: 2fr 6fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.product-image img {
  max-width: 300px;
  max-height: 300px;
}

.product-quantity input {
  width: 40px;
  text-align: center;
}

.product-quantity button {
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

.remove-product button {
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 14px;
  cursor: pointer;
}

.remove-product button:hover {
  background-color: #d32f2f;
}
</style>
