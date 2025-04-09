<template>
    <v-container> 
        <v-text-field
        label="Model Number"
        v-model="product.modelNumber"
        :rules="[v => !!v || 'Model number is required']"
        v-if="product.category === 'Electronics'"
        required
        />
    </v-container>     
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  