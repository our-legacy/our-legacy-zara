<template>
  <div>
    <b-navbar bg="transparent" expand="lg" variant="light" class="navbares" fixed="top">
      <b-container fluid>
        <b-navbar-brand href="/" id="malouka">
          <Sidebar />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
            class="malouka" />
        </b-navbar-brand>
        <b-navbar-toggle target="navbarScroll" />
        <b-collapse id="navbarScroll" is-nav>
          <b-nav class="ml-auto my-2 my-lg-0" style="max-height: 100px" navbar-scroll>
            <div class="nav-item">
              <b-nav-item href="/search" style="position: fixed;  top: 40px;right: 90px; z-index: 1000;cursor: pointer;background: transparent;border: none" @click="handleSearchClick" class="font-sans text-lg" >
   
                Search 
              </b-nav-item>
            </div>

            <div class="nav-item">
              <b-nav-item href="/login" class="font-sans text-lg" style="position: fixed;top: 40px;right: 150px;  z-index: 1000; cursor: pointer; background: transparent;border: none" @click="handleLoginClick">
                Sign In
              </b-nav-item>
            </div>
            <div class="nav-item">
              <b-nav-item href="/details" class="font-sans text-lg " style="position: fixed; top: 40px; right: 210px;z-index: 1000;cursor: pointer;background: transparent;border: none" @click="handleCollectionClick" >
               Collection

            </b-nav-item>
              <div class="nav-item">
                <b-nav-item href="/cart" id="cart"  @click="handleCartClik">
                  <img
                    src="https://cdn.discordapp.com/attachments/1073948141822427256/1108700360891183175/aFtEKyQmH8K26qurE22yD-transformed.png"
                    class="louka" style="position: fixed;top: 20px; right: 10px; z-index: 1000;cursor: pointer;background: transparent;border: none" />
                </b-nav-item>
              </div>
            </div>
          </b-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import Sidebar from "../components/sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  methods: {
    handleLoginClick() {
      this.$router.push('/login');
    },
    handleSearchClick() {
      this.$router.push('/search');
    },
    handleCollectionClick() {
      this.$router.push('/details');
    },
    handleCartClik(){
      this.$router.push("/cart")
    }
  },
};
</script>


<style scoped>
.louka {
  width: 50px;
}

.malouka {

  position: fixed;
  width: 15%;
  margin-left: 100px;
  z-index: 1000;
  cursor: pointer;
  background: transparent;
  border: none
}

.navbares {
  background-color: transparent;
  box-shadow: none;
  padding: 1rem 0;
}

.nav-item {

  margin-left: 50px;
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
