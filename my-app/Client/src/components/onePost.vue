<template>
<div>
  <div>
        <navbar/>
    </div>   
    <MDBContainer style="margin-top: 150px">
      
      <MDBRow class="justify-content-center">
        <MDBCol v-for="e in data" :key="e.id" md="12" lg="4" class="mb-4">
          <MDBCard class="h-100">
            <img :src="e.image" :alt="e.name" class="w-100" />
            <MDBCardBody
              class="d-flex flex-row justify-content-between p-0 pt-1.5"
            >
              <span class="card-title mb-3 text-left details">{{
                e.name
              }}</span>
              <span class="mb-3 text-right details">${{ e.price }}</span>
              
            </MDBCardBody>
            <button class="button button--winona button--border-thick button--round-l button--text-upper button--size-s button--text-thick" data-text="Open Project"  @click="handleAdd(e.id)">
                <span>ADD TO CART</span>
              </button>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  
</template>

<script>
import navbar from "./navbar.vue";
import axios from "axios";
import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-vue-ui-kit";

// const currentUser = JSON.parse(window.localStorage.getItem('token'));

export default {
  components: { navbar },
  data() {
    return {
      gender: "",
      category: "",
      data: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get(
          `http://localhost:4000/products/${this.gender}/${this.category}`
        )
        .then((res) => {
          this.data = res.data;
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleAdd(id){
      axios.post(`http://localhost:4000/cart/add`,{
        // users_id:currentUser,
        users_id:1,
        products_id:id
        
      })
      alert("product added to cart")
      .then(res=>console.log(res))
       .catch((err) => {
          console.log(err);
        });
  }, 

},
  mounted() {
    this.category = window.location.pathname.split("/")[2];
    this.gender = window.location.pathname.split("/")[1];
    if (this.category && this.gender) {
      this.fetchData();
    }
  },
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
  },
};
</script>

<style>
.details {
  margin-bottom: 3px;
}
</style>
