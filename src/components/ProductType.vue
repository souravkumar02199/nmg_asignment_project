<template>
    <v-row v-if="store.product.subCategory && store.productTypes.length >0">
      <v-col>
        <v-radio-group 
          v-model="selectedProductType" 
          label="Product Type" 
          @change="updateProductType">
          
          <!-- Dynamically render radio buttons based on store's productTypes -->
          <v-radio 
            v-for="type in store.productTypes" 
            :key="type" 
            :label="type" 
            :value="type" />
        </v-radio-group>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useProductStore } from '@/store/productStore';
  
  const store = useProductStore();
  const selectedProductType = ref(store.product.productType);
  
  // Watch for changes in subCategory to clear product type and update options
  watch(() => store.product.subCategory, () => {
    selectedProductType.value = ''; // Reset product type when sub-category changes
  });
  
  // Function to update product type in store
  function updateProductType() {
    store.setProductType(selectedProductType.value); // Update the selected product type in store
  }
  </script>
  
  <style scoped>
  /* Optional styling for the component */
  </style>
  