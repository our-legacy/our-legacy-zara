<template>
   <div class="center-container">
    <div>
      <input
        class="mb-4 input"
        type="text"
        placeholder="Search for your product or collection"
        v-model="text"
      />
      <div class="card">
        <div class="container">
          <div v-for="(el, index) in filteredData" :key="index">
            <router-link :to="'/details/' + el.name">{{ el.name }}</router-link>
            <img :src="el.image" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: '',
        data: [], // You can fetch data using an API call or import it from a JSON file
      };
    },
    computed: {
      filteredData() {
        return this.data.filter((el) =>
          el.name.toLowerCase().includes(this.text.toLowerCase())
        );
      },
    },
  };
  </script>
  <style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as per your requirement */
}
</style>
  