<template>
  <v-container>
    <!-- SEO Keywords Textarea -->
    <v-textarea
      v-model="product.seoKeywords"
      label="SEO Keywords"
      placeholder="Enter comma-separated keywords"
      hint="Separate keywords with commas"
      persistent-hint
      rows="4"
      
    />
    <!-- :counter="150"
      outlined
      :error-messages="seoKeywordsError" -->
  </v-container>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';
// import { computed } from 'vue';

const product = useProductStore().product;

// Computed property to check if SEO keywords exceed the max character limit
// const seoKeywordsError = computed(() => {
//   if (product.seoKeywords.length > 150) {
//     return 'Keywords length should not exceed 150 characters.';
//   }
//   return '';
// });
</script>

<style scoped>
/* Optional: Customize error message appearance */
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
