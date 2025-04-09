<template>
    <v-container>  
        <v-text-field
        label="Material"
        v-model="product.material"
        v-if="product.category === 'Clothing' || product.category === 'Home & Garden'"
        required
        />
    </v-container>  
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  