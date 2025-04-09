<template>
    <v-container> 
        <v-text-field
        label="Brand Name"
        v-model="product.brandName"
        :rules="[v => !!v || 'Brand name is required']"
        required
        />
    </v-container> 
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  