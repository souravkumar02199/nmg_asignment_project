<template>
    <v-container>   
        <v-select
        label="Available Sizes"
        v-model="product.availableSizes"
        :items="availableSizes[product.subCategory] || []"
        multiple
        v-if="product.category === 'Clothing'"
        />
    </v-container>   
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product, availableSizes } = productStore;
  </script>
  