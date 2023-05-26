<template>
  <div>
    <b-navbar bg="transparent" expand="lg" variant="light" class="navbares" fixed="top">
      <Sidebar />

      <b-container fluid>
        <b-navbar-brand href="/" id="malouka">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" class="malouka" />
        </b-navbar-brand>

        <b-navbar-toggle target="navbarScroll" />

        <b-collapse id="navbarScroll" is-nav>
          <b-nav class="ml-auto my-2 my-lg-0" style="max-height: 100px" navbar-scroll>
            <div class="nav-item">
              <b-nav-item href="/search" class="font-sans text-lg mr-3">
                Search
              </b-nav-item>
            </div>
              
            <div class="nav-item" >
              <b-nav-item   @click="handleLoginClick" class="font-sans text-lg mr-3">
                SIGN IN
              </b-nav-item>
            </div>
            <div class="nav-item">
              <b-nav-item href="/details" class="font-sans text-lg mr-3">
                Collection
              </b-nav-item>
            </div>
            <div class="nav-item ml-auto">
              <b-nav-item href="/cart" id="cart">
                <img src="https://cdn.discordapp.com/attachments/1073948141822427256/1108700360891183175/aFtEKyQmH8K26qurE22yD-transformed.png" class="louka" />
              </b-nav-item>
            </div>
          </b-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  components: {
    Sidebar,
  },
  methods: {
    handleLoginClick() {
      this.$router.push('/login');
    },
  },
};
</script>


<style scoped>
.louka {
  width: 50px;
}

.malouka {
  width: 20%;
  margin-left:100px
}

.navbares {
  background-color: transparent;
  box-shadow: none;
  padding: 1rem 0;
}

.nav-item {
  display: inline-block;
  margin-right: 1rem;
}

.nav-item:last-child {
  margin-right: 0;
}

.nav-link {
  color: #000;
  font-family: "Sans-serif";
  font-size: 15px;
}

.nav-link:hover,
.nav-link:focus {
  color: #007bff;
}
</style>
