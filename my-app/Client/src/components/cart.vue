<template>
  <div>
    <Navbar/>
  <section style="background-color: white">
    <div class="card-body">
      <div class="row">
        <div class="text-center">
          <br />
          <br />
          <br />
          <h1
            style="
              font-size: 15px;
              width: 40px;
              height: 40px;
              margin-top: 150px;
              padding-left: 120px;
              text-decoration-line: underline;
              text-align: center;
            "
          >
            Cart
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="item in data"
          :key="item.products_id"
          class="col-md-12 col-lg-4 mb-4"
        >
          <div class="card h-100">
            <img :src="item.image" :alt="item.name" class="w-100" />
            <div class="card-body d-flex flex-row justify-content-between p-0 pt-1.5">
              <span
                class="card-title mb-3 text-left details"
                style="
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 15px;
                  padding-left: 20px;
                  padding-top: 5px;
                "
              >
                {{ item.name }}
              </span>
              <span
                class="mb-3 text-right details"
                style="
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 15px;
                  padding-right: 20px;
                  padding-top: 5px;
                "
              >
                ${{ item.price * item.productQuantity }}
              </span>
            </div>
            <div
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
                text-align: right;
                padding-right: 20px;
                padding-bottom: 5px;
              "
              @click="handleDelete(item.products_id)"
            >
              DELETE
            </div>
            <br />
            <div class="qty-input">
              <button
                class="qty-count qty-count--minus"
                data-action="minus"
                type="button"
                @click="decrementQuantity(item)"
              >
                -
              </button>
              <input
                class="product-qty"
                type="number"
                name="product-qty"
                min="1"
                max="10"
                v-model="item.productQuantity"
              />
              <button
                class="qty-count qty-count--add"
                data-action="add"
                type="button"
                @click="incrementQuantity(item)"
              >
                +
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, ref, onMounted } from 'vue';
import Navbar from './navbar.vue';
    const currentUser = JSON.parse(window.localStorage.getItem("token"));

export default defineComponent({
  components: { Navbar },
  data() {
    return {
      show: false,
      data: [],
      tracker: false,
    };
  },
  methods: {
    fetchData() {
      axios
        .get('http://localhost:3000/cart/cart/1')
        .then((res) => {
          this.data = res.data.map((item) => ({
            ...item,
            productQuantity: 1,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(prodId: number) {
      axios
        .delete(`http://localhost:4001/zara/cart/delete/${prodId}/${currentUser.id}`)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    incrementQuantity(item) {
      item.productQuantity += 1;
    },
    decrementQuantity(item) {
      if (item.productQuantity > 1) {
        item.productQuantity -= 1;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<style >
.qty-input {
  color: #000;
  background: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-align: center;
}

.qty-input .product-qty,
.qty-input .qty-count {
  background: transparent;
  color: inherit;
  font-weight: bold;
  font-size: inherit;
  border: none;
  display: inline-block;
  min-width: 0;
  height: 2.5rem;
  line-height: 1;
}

.qty-input .product-qty {
  width: 50px;
  min-width: 0;
  display: inline-block;
  text-align: center;
  appearance: textfield;
}

.qty-input .product-qty::-webkit-outer-spin-button,
.qty-input .product-qty::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

.qty-input .qty-count {
  padding: 0;
  cursor: pointer;
  width: 2.5rem;
  font-size: 1.25em;
  text-indent: -100px;
  overflow: hidden;
  position: relative;
}

.qty-input .qty-count:before,
.qty-input .qty-count:after {
  content: "";
  height: 2px;
  width: 10px;
  position: absolute;
  display: block;
  background: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.qty-input .qty-count--minus {
  border-right: 1px solid #e2e2e2;
}

.qty-input .qty-count--add {
  border-left: 1px solid #e2e2e2;
}

.qty-input .qty-count--add:after {
  transform: rotate(90deg);
}

.qty-input .qty-count:disabled {
  color: #ccc;
  background: #f2f2f2;
  cursor: not-allowed;
  border-color: transparent;
}

.qty-input {
  border-radius: 4px;
  /* transform: scale(1);  */
  width: 50px;
  height: 35px;
  margin-left: 340px;
  margin: bottom;
}
</style>
