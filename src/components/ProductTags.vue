<template>
  <v-container>
    <!-- Product Tags Input -->
    <v-text-field
      v-model="newTag"
      label="Product Tags"
      placeholder="Press Enter to add tag"
      @keyup.enter="addTag"
      outlined
      dense
    />
    
    <!-- Tags Display -->
    <v-chip-group v-if="tags.length" column>
      <v-chip
        v-for="(tag, index) in tags"
        :key="index"
        close
        @click:close="removeTag(index)"
        class="tag-chip"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/store/productStore';

const newTag = ref('');
const tags = ref(useProductStore().product.tags);

const addTag = () => {
  const tag = newTag.value.trim();
  if (tag && !tags.value.includes(tag)) {
    tags.value.push(tag); // Add tag
    newTag.value = ''; // Clear input field
  }
};

const removeTag = (index) => {
  tags.value.splice(index, 1); // Remove tag
};
</script>

<style scoped>
/* Customize the appearance of the chip */
.tag-chip {
  margin: 4px;
}

.v-chip--close {
  cursor: pointer;
  font-size: 16px;
}
</style>
