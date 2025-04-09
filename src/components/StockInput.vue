<template>
  <v-container>
    <!-- Stock Quantity Field -->
    <v-text-field
      v-model="product.stockQuantity"
      label="Stock Quantity"
      type="number"
      :min="0"
      required
      placeholder="Enter stock quantity"
      :rules="[v => !!v || 'Stock Quantity is required']"
      
      outlined
      dense
    />
    <!-- :error-messages="stockQuantityError" -->
  </v-container>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';
// import { computed } from 'vue';

const product = useProductStore().product;

// Computed property to validate stock quantity
// const stockQuantityError = computed(() => {
//   if (!product.stockQuantity || product.stockQuantity < 0) {
//     return 'Stock quantity must be non-negative';
//   }
//   return '';
// });
</script>

<style scoped>
/* Optional: Custom styles for error messages */
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
