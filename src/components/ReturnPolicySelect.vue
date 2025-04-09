<template>
    <v-container> 
        <v-select
        label="Return Policy"
        v-model="product.returnPolicy"
        :items="returnPolicies"
        required
        />
    </v-container> 
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product, returnPolicies } = productStore;
  </script>
  