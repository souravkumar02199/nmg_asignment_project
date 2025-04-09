<template>
  <v-container>
    <!-- Product Name Input -->
    <v-text-field
      v-model="product.name"
      label="Product Name"
      placeholder="Enter product name"
      required
      :rules="[value => !!value || 'Product Name is required']"
      outlined
      class="mt-4"
    />
  </v-container>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';

const product = useProductStore().product;
</script>

<style scoped>
/* Optional: Customize error message appearance */
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
