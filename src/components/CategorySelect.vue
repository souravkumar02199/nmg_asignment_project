<template>
  <v-container>
    <!-- Product Category Selection with separated label -->
    <div class="v-select-container">
      <v-select
        id="product-category"
        data-testid="category-select"
        v-model="product.category"
        label="Product Category"
        :items="categories"
        @change="onCategoryChange"
        required
      />
    </div>

    <!-- Custom Category Input, shown when 'Other' is selected -->
    <v-text-field
      v-if="product.category === 'Other'"
      v-model="customCategory"
      label="Enter Custom Category"
      placeholder="Enter custom category"
      required
    />
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useProductStore } from '@/store/productStore';

const product = useProductStore().product;
const customCategory = ref('');
const categories = useProductStore().categories;

const onCategoryChange = () => {
  if (product.category !== 'Other') {
    customCategory.value = ''; // Clear custom category if another category is selected
  }
};

watch(() => product.category, () => {
  useProductStore().setCategory(useProductStore().product.category);  // Reset product type when sub-category changes
});
</script>

<style scoped>
/* Custom styles for form if needed */
.v-select-container {
  margin-bottom: 16px;
}

.product-category-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: block;
}
</style>
