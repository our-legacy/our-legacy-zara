<template>
    <div>
    <div class-name="column-labels">
        <div id="cart">Cart </div>
        <label class-name="product-image">Image</label>
        <label class-name="product-details">Product</label>
        <label class-name="product-price">Price</label>
        <label class-name="product-removal">Remove</label>
      </div>
    <div class-name="shopping-cart">
      
      <div v-for="e in data" :key="e.products_id" class-name="product">
        <div class-name="product-image">
          <img :src="e.image" :alt="e.name" />
        </div>
        <div class-name="product-details">
          <div class-name="product-title">{{ e.name }}</div>
          <p class-name="product-description">{{ e.description }}</p>
        </div>
        <div class-name="product-price">${{ e.price }}</div>
       
        <div class-name="product-removal">
          <button class-name="remove-product" @click="handleDelete(e.products_id)">
            Remove
          </button>
        </div>
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
  productquantity: number;
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
  },
  mounted() {
    this.fetchData();
  },
};
</script>
  
  <style>
  #cart{
    font-size: 15px;
     width : 40px;
      height: 40px;
      margin-Top: 150px;
      padding-Left: 120px;
      text-decoration-line:underline ;
       text-align : center;
  }

 .product-image{

    width: 5%;
    height: 5%;
  }
  </style> 
  

  