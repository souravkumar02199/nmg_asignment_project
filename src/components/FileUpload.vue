<template>
  <v-container>
    <!-- Product Images File Input -->
    <v-file-input
      v-model="product.productImages"
      label="Product Images"
      accept="image/png, image/jpeg"
      multiple
      outlined
      @change="handleFileUpload"
      :error-messages="imageError ? [imageError] : []"
      prepend-icon="mdi-image"
    />
    
    <!-- Image Previews -->
    <v-row v-if="product.productImages.length">
      <v-col v-for="(image, index) in product.productImages" :key="index" cols="4" md="2">
        <v-img :src="image.url" alt="Product Image" height="100" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/store/productStore';

const productStore = useProductStore();
const { product } = productStore;

const imageError = ref('');

// Handle file upload
const handleFileUpload = (files) => {
  imageError.value = '';
  const fileArray = Array.from(files);
  fileArray.forEach((file) => {
    // Check file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      imageError.value = 'Only jpg and png files are allowed';
      return;
    }

    // Check file size
    if (file.size > 5 * 1024 * 1024) { // 5MB
      imageError.value = 'File size should not exceed 5MB';
      return;
    }

    // Create a temporary URL for the image preview
    const imageUrl = URL.createObjectURL(file);
    product.productImages.push(imageUrl);
  });
};
</script>

<style scoped>
/* Optional: You can add custom styling for error messages if needed */
.error-message {
  color: red;
  font-size: 14px;
}
</style>
