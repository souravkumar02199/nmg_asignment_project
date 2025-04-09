<template>
    <v-container> 
      <v-row class="mb-2">
        <v-col>
         <v-label>Product Dimensions</v-label>
        </v-col>
      </v-row>  
      <v-text-field
        label="Length"
        v-model="product.length"
        :rules="[v => !!v && v > 0 || 'Length is required and must be greater than zero']"
        type="number"
        required
      />
      <v-text-field
        label="Width"
        v-model="product.width"
        :rules="[v => !!v && v > 0 || 'Width is required and must be greater than zero']"
        type="number"
        required
      />
      <v-text-field
        label="Height"
        v-model="product.height"
        :rules="[v => !!v && v > 0 || 'Height is required and must be greater than zero']"
        type="number"
        required
      />
      <v-select
        label="Unit"
        v-model="product.unit"
        :items="['cm', 'inches']"
        required
      />
    </v-container> 
  </template>
  
  <script setup>
  import { useProductStore } from '@/store/productStore';
  
  const productStore = useProductStore();
  const { product } = productStore;
  </script>
  