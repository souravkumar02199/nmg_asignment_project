<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>Welcome to the E-commerce Admin Dashboard</h1>
      <p>Manage your products and more!</p>
      <router-link to="/product-form">Go to Product Form</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  router-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  </style>
  