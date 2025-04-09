<template>
  <v-container>
    <!-- Shipping Options Checkboxes -->
    <v-row class="mb-1">
      <v-col>
        <v-label>Shipping Options</v-label>
      </v-col>
    </v-row>

    <!-- Display selected shipping options -->

    <v-checkbox-group
      label="Shipping Options"
      column
    >
      <v-checkbox
        v-for="option in shippingOptions"
        :key="option"
        :label="option"
        :value="option"
        @change="onShippingOptionChange(option)"
      />
    </v-checkbox-group>

    <!-- Next Day Shipping Checkbox (only if product weight is under 5 kg) -->
    <v-checkbox
      v-if="productWeight < 5"
      :value="'Next Day'"
      :label="'Next Day (only available if weight is under 5 kg)'"
      @change="onShippingOptionChange('Next Day')"
    />

    <!-- International Shipping Warning -->
    <v-alert
      v-if="selectedShippingOptions.includes('International')"
      type="info"
      class="mt-4"
    >
      International shipping may incur additional fees.
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/store/productStore';

const shippingOptions = ['Standard', 'Express', 'Next Day', 'International'];
const selectedShippingOptions = ref([]); // Stores selected options
const productWeight = ref(useProductStore().product.productWeight); // Get weight from store

// Handle checkbox selection/deselection
const onShippingOptionChange = (option) => {
  const index = selectedShippingOptions.value.indexOf(option);
  
  if (index === -1) {
    // If option is not already selected, push it into the array
    selectedShippingOptions.value.push(option);
  } else {
    // If option is already selected, remove it from the array
    selectedShippingOptions.value.splice(index, 1);
  }
};
</script>

<style scoped>
/* Optional: Additional custom styling for spacing or alignment */
</style>
