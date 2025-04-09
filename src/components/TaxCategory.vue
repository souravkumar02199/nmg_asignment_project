<template>
    <v-container> 
        <v-select
        v-model="taxCategory"
        :items="taxCategories"
        label="Tax Category"
        required
        @change="updateTaxCategory"
        />
    </v-container> 
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useProductStore } from '@/store/productStore';
  
  const store = useProductStore();
  const taxCategories = store.taxCategories;
  const taxCategory = ref(store.product.taxCategory);
  
  // Watch for changes in taxCategory to update the store
  watch(taxCategory, (newValue) => {
    store.setTaxCategory(newValue);
  });
  
  // Initial setting of tax category (in case it's changed externally)
  taxCategory.value = store.product.taxCategory;
  </script>
  