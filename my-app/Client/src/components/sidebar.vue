<template>
    <div>
      <button class="sidebar-toggle" @click="toggleSidebar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
  
      <div :class="['sidebar', { 'open': open }]">
        <div class="sidebar-header">
          <button class="close-btn" @click="toggleSidebar">
            <span class="close-icon">&times;</span>
          </button>
        </div>
  
        <div class="sidebar-menu">
          <h3>Women</h3>
          <ul class="category-list">
            <li>
              <router-link to="/women/top" class="category-item">Tops</router-link>
            </li>
            <li>
              <router-link to="/women/shirts" class="category-item">Shirts</router-link>
            </li>
            <li>
              <router-link to="/women/skirt" class="category-item">Skirts</router-link>
            </li>
            <li>
              <router-link to="/women/jeans" class="category-item">Jeans</router-link>
            </li>
            <li>
              <router-link to="/women/shoes" class="category-item">Shoes</router-link>
            </li>
            <li>
              <router-link to="/women/bag" class="category-item">Bag</router-link>
            </li>
            <li>
              <router-link to="/women/perfume" class="category-item">Perfume</router-link>
            </li>
          </ul>
  
          <h3>Men</h3>
          <ul class="category-list">
            <li>
              <router-link to="/men/shirts" class="category-item">Shirts</router-link>
            </li>
            <li>
              <router-link to="/men/jeans" class="category-item">Jeans</router-link>
            </li>
            <li>
              <router-link to="/men/shoes" class="category-item">Shoes</router-link>
            </li>
            <li>
              <router-link to="/men/perfume" class="category-item">Perfume</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.open = !this.open;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  
  .sidebar-toggle .bar {
    display: block;
    width: 24px;
    height: 2px;
    margin-bottom: 6px;
    background-color: black;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: white;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-header {
    padding: 15px;
    background-color: black;
    color: white;
  }
  
 
  .close-btn {
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
        }

        .close-icon {
          font-size: 24px;
        }

        .sidebar-menu {
          padding: 20px;
        }

        .category-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          color:black;
        }

        .category-list li {
          margin-bottom: 10px;
          color:black;
          text-decoration: none;


        }

        .category-item {
          display: "block";
          margin-left : 120px;
          color: "black";
          text-decoration: "none";
          color:black;
        }
      </style>
  