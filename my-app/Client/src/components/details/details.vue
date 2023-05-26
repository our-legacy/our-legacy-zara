<template>
 <div class="center-container">
    <div v-for="e in data" :key="e.id" class="col-md-12 col-lg-4 mb-4">
      <div class="card h-100">
        <img :src="e.image" :alt="e.name" class="w-100" />
        <div class="card-body d-flex flex-row justify-content-between p-0 pt-1.5">
          <span class="card-title mb-3 text-left details"> {{ e.name }} </span>
          <span class="mb-3 text-right details"> ${{ e.price }} </span>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from "axios";
  import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
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
            console.log(this.data)
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
  </script>
  <style>




.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  height: 100vh; /* Adjust the height as per your requirement */
}
</style>
  