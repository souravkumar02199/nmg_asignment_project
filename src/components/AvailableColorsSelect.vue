<template>
   <v-container>
        <v-select
        label="Available Colors"
        v-model="product.availableColors"
        :items="['Red', 'Green', 'Blue', 'Black', 'White']"
        multiple
        v-if="product.category === 'Clothing' || product.category === 'Electronics'"
        />
    </v-container>     
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  