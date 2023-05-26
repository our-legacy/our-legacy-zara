<template>
  <!-- <div class="sign">
    <h3>Sign up Admin</h3>

    <input type="text" class="inp" placeholder="User Name" v-model="name" /><br />
    <input type="password" class="inp" placeholder="User Password" v-model="password" /><br />
    <input type="email" class="inp" placeholder="User E-mail" v-model="email" /><br />
    <input type="password" class="inp" placeholder="Secret key" v-model="key" /><br />
    <input type="button" class="btn" value="submit" @click="handleSubmit" />
  </div> -->
    <div>
    <Navbar />
    
    <div id="authdiv" style="width: 70%; height: 100%; padding-top: 210px; display: flex; gap: 3%;">
      <div id="auth" style="margin-left: 10%; margin-right: 10%;">
        <section>
          <h1 style="margin-bottom: 12px; margin-top: 0px; font-weight: 600; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 30px;">Personal details</h1>
          <form id="form" @submit.prevent="handleSubmit" style="width: 100%;">
            <div id="ep" style="margin-bottom: 10%;">
              <input type="text" id="inputName" placeholder="LASTNAME" required v-model="name" @change="onChange($event)"  style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
              <input type="email" id="inputEmail" placeholder="E-MAIL" required v-model="email" @change="onChange1($event)" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
              <br />
             <input type="password" class="inp" placeholder="Secret key" v-model="key"  style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;"/><br />
              <input type="password" id="inputPassword" placeholder="PASSWORD" required v-model="password" style="border: 0; border-bottom: 1px solid gray; width: 100%; height: 30px; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;" />
            </div>
            <div id="authbttn" style="margin-top: 45px;">
              <button id="authb" class="auth-btn" type="submit"  @click="handleSubmit" style="width: 19em; height: 2.7em; background-color: black; color: white; margin-top: 13px; cursor: pointer; outline: none; border: none; font-family: Neue Helvetica, Arial, Helvetica, sans-serif; font-size: 12px;">CREATE ACCOUNT</button>
            </div>
          </form>
        </section>
      </div>
    </div>
    
    <div id="footer"></div>
    <div id="ending"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
      key: ""
    };
  },
  methods: {
    handleSubmit() {
      if (this.key === "zara2023") {
        axios
          .post("http://localhost:3000/admin/signadmin", {
            name: this.name,
            email: this.email,
            password: this.password
          })
          .then((suc) => {
            this.$router.push("/adminlog");
            console.log(suc);
          })
          .catch((err) => console.log(err));
      } else {
        alert("Don't play with us");
      }
    },
     onChange(event) {
            console.log(event.target.value)
           this.user.name=event.target.value
        },
        onChange1(event) {
            console.log(event.target.value)
            this.user.email=event.target.value
        }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
