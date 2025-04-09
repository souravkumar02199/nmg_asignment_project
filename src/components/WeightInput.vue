<template>
    <v-container> 
        <v-text-field
        label="Product Weight"
        v-model="product.productWeight"
        :rules="[v => !!v && v > 0 || 'Weight is required and must be greater than zero']"
        type="number"
        required
        />
        <v-select
        label="Unit"
        v-model="product.weightUnit"
        :items="['kg', 'lb']"
        required
        />
    </v-container>     
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  