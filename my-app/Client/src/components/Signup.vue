<template>
  <div>
    <Navbar />
    
    <div id="authdiv" style="width: 70%; height: 100%; padding-top: 210px; display: flex; gap: 3%;">
      <div id="auth" style="margin-left: 10%; margin-right: 10%;">
        <section>
          <h1 style="margin-bottom: 12px; margin-top: 0px; font-weight: 600; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 30px;">Personal details</h1>
          <form id="form" @submit.prevent="handleRegister" style="width: 100%;">
            <div id="ep" style="margin-bottom: 10%;">
              <input type="text" id="inputName" placeholder="FIRSTNAME" required v-model="name" @change="onChange($event)" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
              <input type="text" id="inputName" placeholder="LASTNAME" required v-model="name" @change="onChange1($event)" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
              <input type="email" id="inputEmail" placeholder="E-MAIL" required v-model="email" @change="onChange2($event)" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
              <input type="password" id="inputPassword" placeholder="PASSWORD" required v-model="password" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
            </div>
            <div id="authbttn" style="margin-top: 45px;">
              <button id="authb" class="auth-btn" type="submit" style="width: 19em; height: 2.7em; background-color: black; color: white; margin-top: 13px; cursor: pointer; outline: none; border: none; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;">CREATE ACCOUNT</button>
            </div>
          </form>
          <p v-if="error" style="color: red;">{{ error }}</p>
        </section>
      </div>
    </div>
    
    <div id="footer"></div>
    <div id="ending"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './navbar.vue';
import axios from 'axios';
import  useRouter  from 'vue-router';

export default defineComponent({
  name: 'SignUp',
  components: {
    Navbar,
  },
  data() {
    return {
     user: {
    firstname: '',
     lastname: '',
      email: '',
      password: '',
      error: '',}
    };
  }, 
methods: {
  handleRegister: async function() {
    
      try {
        const response = await axios.post('http://localhost:3000/auth/signup', {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          password: this.user.password,
        });
        console.log(response);
        console.log( {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          password: this.user.password,
  },'hh')
        alert('Your account has been created.');
        window.location.href = '/login';
      } catch (error) {
        console.log(error);
        this.user.error = 'Check your password or email.';
      }
    },
    onChange(event) {
            console.log(event.target.value)
            this.user.firstname=event.target.value
        },
        onChange1(event) {
            console.log(event.target.value)
           this.user.lastname=event.target.value
        },
        onChange2(event) {
            console.log(event.target.value)
            this.user.email=event.target.value
        }
},
});
</script>

<style scoped>
</style>