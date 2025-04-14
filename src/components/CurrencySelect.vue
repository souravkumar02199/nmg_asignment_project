<template>
   <v-container>  
        <v-select
        label="Currency"
        v-model="product.currency"
        data-testid="currency-select"
        :items="currencies"
        :rules="[v => !!v || 'Currency is required']"
        required
        />
   </v-container>  
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product, currencies } = productStore;
  </script>
  