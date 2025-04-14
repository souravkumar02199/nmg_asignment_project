<template>
  <v-container>
    <!-- Price Input -->
    <v-text-field
      v-model="product.price"
      data-testid="price"
      label="Price"
      type="number"
      min="0.01"
      step="0.01"
      placeholder="Enter price"
      required
      :rules="[
        value => value > 0 || 'Price must be a positive number',
        value => value >= 0.01 || 'Price must be at least 0.01'
      ]"
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
/* Optional: You can add custom styling for error messages if needed */
.error-message {
  color: red;
  font-size: 14px;
}
</style>
