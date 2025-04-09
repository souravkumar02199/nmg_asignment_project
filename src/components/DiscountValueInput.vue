<template>
    <v-container> 
        <v-text-field
        label="Discount Value"
        v-model="product.discountValue"
        :rules="[v => (v !== null && v >= 0) || 'Discount value must be greater than or equal to 0']"
        v-if="product.discountType !== 'No Discount'"
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
  