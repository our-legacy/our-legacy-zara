<template>
  <!-- <div class="login-form">
    <h3>Login Admin</h3>
    <input type="email" class="inp" placeholder="Email" v-model="email" />
    <input type="password" class="inp" placeholder="Password" v-model="password" />
    <input type="button" class="btn" value="Submit" @click="handleLogin" />
    <button class="btn" @click="navigateToSignUp">Sign Up</button>
  </div> -->
  <div>
    <Navbar />
    
    <div id="logindiv" style="width: 70%; height: 100%; padding-top: 210px; display: flex; gap: 3%;">
      <div id="log" style="margin-left: 10%; margin-right: 10%;">
        <section>
          <h3 style="margin-bottom: 12px; margin-top: 20px; font-weight: 600; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 14px;">
            LOG IN TO YOUR ACCOUNT
          </h3>
          <form id="form" @submit.prevent="handleLogin" style="width: 100%;">
            <div id="ep" style="margin-bottom: 10%;">
              <input type="email" id="inputEmail" placeholder="E-MAIL" required v-model="email" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
              <input type="password" id="inputPasswd" placeholder="PASSWORD" required v-model="password" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
            </div>
            <p class="size6" style="font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 9px; margin-top: 10px; color: grey; text-align: center;">HAVE YOU FORGOTTEN YOUR PASSWORD?</p>
            <div id="logbttn" style="margin-top: 45px;">
              <button id="signin" class="login-btn" @click="handleLogin" style="width: 19em; height: 2.7em; background-color: black; color: white; margin-top: 13px; cursor: pointer; outline: none; border: none; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;">LOG IN</button>
            </div>
          </form>
        </section>
      </div>
      <div id="reg" style="width: 70%; height: 100%;">
        <section>
          <h3 style="margin-bottom: 12px; font-weight: 600; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 14px;">NEED AN ACCOUNT?</h3>
          <div id="bttn" style="margin-top: 20px;">
            <button @click="navigateToSignUp" style="width: 19em; height: 2.7em; background-color: white; color: black; margin-top: 13px; cursor: pointer; outline: none; border: 1px solid black; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 15px;">REGISTER</button>
          </div>
        </section>
      </div>
    </div>
    
    <div id="footer"></div>
    <div id="ending"></div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './navbar.vue';
export default {
    name: 'AdminLog',
  components: {
    Navbar,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        if (this.email.trim() === '' || this.password.trim() === '') {
          return alert('Please fill in all the fields.');
        }
        const response = await axios.post('http://localhost:4000/admin/loginadmin', {
          email: this.email,
          password: this.password,
        });
        const loginSuccess = true;
    //    conosle.log(email,password)
        if (loginSuccess) {
         alert("welcome to zara")
         this.$router.push('/homeAdmin');
        } else {
          alert("login failed");
        }   
      } catch (error) {
        console.log(error)
      }
    },
    navigateToSignUp() {
      this.$router.push('/adminsignup');
    },
  },
};
</script>
