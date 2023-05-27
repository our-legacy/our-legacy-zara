<template>
  <div class="center-container" style="margin-top: 150px;">
    <div v-for="e in data" :key="e.id" class="col-md-12 col-lg-4 mb-4">
      <div class="card h-100">
        <img :src="e.image" :alt="e.name" class="w-100" />
        <div class="card-body d-flex flex-row justify-content-between p-0 pt-1.5">
          <span class="card-title mb-3 text-left details">
            {{ e.name }}
          </span>
          <span class="mb-3 text-right details">
            ${{ e.price }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/products/products")
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 2rem;
}

.mb-4 {
  display: inline-block;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.card-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding-left: 20px;
  padding-top: 5px;
}

.text-right {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding-right: 20px;
  padding-top: 5px;
}
</style>
