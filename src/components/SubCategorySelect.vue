<template>
  <v-container>
    <!-- Sub-Category Dropdown -->
    <v-select
      v-if="product.category !== 'Other'"
      v-model="product.subCategory"
      :items="subCategories[product.category] || []"
      label="Sub-Category"
      :disabled="!product.category"
      item-text="name"
      item-value="value"
      outlined
      dense
    />
  </v-container>
</template>

<script setup>
import { watch} from 'vue';
import { useProductStore } from '@/store/productStore';

const product = useProductStore().product;
const subCategories = useProductStore().subCategories;

watch(() => product.subCategory, () => {
  useProductStore().setSubCategory(useProductStore().product.subCategory)  // Reset product type when sub-category changes
  });
</script>

<style scoped>
/* Optional: Custom styles can be added here if needed */
</style>
