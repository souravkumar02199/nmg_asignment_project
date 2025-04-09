<template>
    <v-container> 
        <v-text-field
        label="Warranty Period"
        v-model="product.warrantyPeriod"
        :rules="[v => (v > 0) || 'Warranty period must be greater than zero']"
        v-if="product.category === 'Electronics' || product.category === 'Home & Garden'"
        type="number"
        required
        />
    </v-container> 
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  