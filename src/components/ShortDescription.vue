<template>
    <v-textarea
      v-model="shortDescription"
      label="Short Description"
      counter
      :max-length="150"
      required
      @input="updateShortDescription"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useProductStore } from '@/store/productStore';
  
  const store = useProductStore();
  const shortDescription = ref(store.product.shortDescription);
  
  // Update store when short description changes
  function updateShortDescription() {
    store.setShortDescription(shortDescription.value);
  }
  </script>
  