<template>
  <v-container>
    <!-- Discount Type Selection -->
    <v-radio-group
      v-model="product.discountType"
      label="Discount Type"
      required
    >
      <v-radio
        label="No Discount"
        value="No Discount"
      />
      <v-radio
        label="Percentage"
        value="Percentage"
      />
      <v-radio
        label="Fixed Amount"
        value="Fixed Amount"
      />
    </v-radio-group>

    <!-- Discount Value Input, shown when Discount Type is not 'No Discount' -->
    
  </v-container>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';

const product = useProductStore().product;
</script>

<style scoped>
/* Custom styles for form if needed */
</style>
