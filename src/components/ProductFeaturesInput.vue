<template>
    <v-container> 
        <v-textarea
        label="Product Features"
        v-model="product.productFeatures"
        multiple
        />
    </v-container>     
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  