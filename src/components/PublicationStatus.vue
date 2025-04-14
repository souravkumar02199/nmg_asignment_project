<template>
  <v-container>
    <!-- Publication Status Radio Group -->
    <v-radio-group
      v-model="product.publicationStatus"
      data-testid="publication-status"
      label="Publication Status"
      row
    >
      <v-radio
        label="Draft"
        value="Draft"
        id="draft"
      />
      <v-radio
        label="Published"
        value="Published"
        id="published"
      />
      <v-radio
        label="Scheduled"
        value="Scheduled"
        id="scheduled"
      />
    </v-radio-group>

    <!-- Publication Date (only visible if 'Scheduled' is selected) -->
    <v-date-picker
      v-if="product.publicationStatus === 'Scheduled'"
      v-model="product.publicationDate"
      label="Publication Date"
      required
      :min="minDate"
      class="mt-4"
    />
  </v-container>
</template>

<script setup>
import { useProductStore } from '@/store/productStore';
import { computed } from 'vue';

// Accessing the product store
const product = useProductStore().product;

// Minimum date for the publication (e.g., today's date or future date)
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Return the date in YYYY-MM-DD format
});
</script>

<style scoped>
/* Optional: You can add additional custom styles */
</style>
