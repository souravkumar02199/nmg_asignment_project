<template>
    <v-container>
    <v-textarea
      label="Product Description"
      v-model="product.description"
      :rules="[v => !!v || 'Product description is required']"
      required
    />
</v-container>
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  