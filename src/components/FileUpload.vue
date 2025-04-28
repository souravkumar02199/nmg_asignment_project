<template>
  <v-container>
    <!-- Product Images File Input -->
    <v-file-input
      v-model="selectedFiles"
      label="Product Images"
      accept="image/*"
      multiple
      outlined
      :error-messages="imageError ? [imageError] : []"
      prepend-icon="mdi-image"
    />

    <!-- Image Previews -->
    <v-row v-if="product.productImages.length" class="ml-6">
      <v-col
        v-for="(image, index) in product.productImages"
        :key="index"
        cols="4"
        md="2"
        
      >
      <div class="product-image-box">
          <v-img
            :src="image.url"
            alt="Product Image"
            height="120"
            width="100%"
            cover
          />
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useProductStore } from '@/store/productStore';

const productStore = useProductStore();
const { product } = productStore;

const imageError = ref('');
const selectedFiles = ref([]); // 👈 bind this to v-file-input

// Watch for file changes
watch(selectedFiles, (files) => {
  imageError.value = '';
  product.productImages = [];

  if (!files || !files.length) return;
  console.log(files)

  files.forEach((file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      imageError.value = 'Only JPG and PNG files are allowed';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      imageError.value = 'File size should not exceed 5MB';
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    product.productImages.push({ url: imageUrl, file });
  });
});
</script>
<style scoped>
.product-image-box {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease;
}

.product-image-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

</style>
