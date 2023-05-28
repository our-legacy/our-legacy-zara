<template>
<div>
    <navbar/>
  <!-- <div class="card" style="width: 18rem;">
    <div class="card-body" style="justify-content: center; align-items: center;">
      <h5 class="card-title">username </h5>
      <h6 class="card-subtitle mb-2 text-muted"> useremail </h6>
    </div>
  </div> -->
  <div>
<h6>.</h6>
    </div>
  <div id="aa">
    <div> 
    <table>
        <h3>All users </h3>
      <tr>
        <th>Id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td> {{user.id}} </td>
        <td> {{user.firstname}} </td>
        <td> {{user.lastname}} </td>
        <td> {{user.email}} </td>
        <button style="background-color: red ; color:white "  @click="handledelete(user.id)" >Delete</button>
      </tr>

    </table>
      </div>
  </div>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import axios from "axios";
export default {
  components: { 
    navbar
  },
  data() {
    return {
      users: { 
        id:'',
        firstname:'',
        lastname:'',
        email: '',
        password:''
      }
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch("http://localhost:4000/auth/getAll")
        .then(response => response.json())
        .then(user => {
          this.users = user; 
        })
        .catch(error => {
          console.error("Error fetching users:", error);
        });
    },
    handledelete(id){
       if(window.confirm("are you sure that u want to delete it")){
    axios.delete(`http://localhost:4000/auth/deleted/${id}`)
    .then((res)=> {
          alert(" user deleted"); 
          this.fetchUsers();
        })
    .catch((err)=>{console.log(err)})
  }

}
}
};
</script>

<style>
/* CSS Styles */
#aa{
    margin-top: 300px;
}
table {
  border-collapse: collapse;
  width: 100%;
  /* margin-top: 200px; */
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>