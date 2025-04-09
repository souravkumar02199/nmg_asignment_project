<template>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmit" style="background-color: rgb(251 251 251); padding: 20px;"
      >
      <v-row>
      <v-col>
        <h1 class="text-center mb-2">Product Management Form</h1>
      </v-col>
      </v-row>
      <v-container>
        <v-text-field
          v-model="product.id"
          label="Product ID"
          readonly
        ></v-text-field>
      </v-container>  
      <!-- Product Name -->
      <ProductNameInput />
      <!-- Category Selection -->
      <CategorySelect />
      <!-- Sub-Category Selection -->
      <SubCategorySelect />
      <ProductType />
      <!-- Brand Name -->
      <BrandNameInput />
      <!-- Model Number for Electronics -->
      <ModelNumberInput v-if="product.category === 'Electronics'" />
      <!-- Product Description -->
      <ProductDescriptionInput />
      <!-- Price and Currency -->
      <PriceInput />
      <CurrencySelect />
      <!-- Discount Type and Value -->
      <DiscountSelect />
      <DiscountValueInput v-if="product.discountType !== 'No Discount'" />
      <!-- Tax Category -->
      <TaxCategory />
      <!-- Stock Quantity -->
      <StockInput />
      <!-- Weight and Dimensions -->
      <WeightInput />
      <!-- <DimensionsInput /> -->
      <AvailableColorsSelect v-if="product.category === 'Electronics' || product.category === 'Clothing'"/>
      <AvailableSizesSelect v-if="product.category === 'Clothing'"/>
      <MaterialInput v-if="product.category === 'Home & Garden' || product.category === 'Clothing'"/>
      <ProductFeaturesInput />
      <ShippingOptions />
      <ReturnPolicySelect />
      <WarrantyPeriodInput v-if="product.category === 'Electronics' || product.category === 'Home & Garden'" />
      <FileUpload />
      <ProductTags />
      <SEOKeywords />
      <PublicationStatus />
      <v-btn type="submit" :disabled="!valid" color="primary">Submit Product</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, watch ,onMounted} from 'vue';
import { useProductStore } from '@/store/productStore';
import ProductNameInput from '@/components/ProductNameInput.vue';
import TaxCategory from '@/components/TaxCategory.vue';
import ProductType from '@/components/ProductType.vue';
import CategorySelect from '@/components/CategorySelect.vue';
import SubCategorySelect from '@/components/SubCategorySelect.vue';
import BrandNameInput from '@/components/BrandNameInput.vue';
import ModelNumberInput from '@/components/ModelNumberInput.vue';
import ProductDescriptionInput from '@/components/ProductDescriptionInput.vue';
import PriceInput from '@/components/PriceInput.vue';
import CurrencySelect from '@/components/CurrencySelect.vue';
import DiscountSelect from '@/components/DiscountSelect.vue';
import DiscountValueInput from '@/components/DiscountValueInput.vue';
import StockInput from '@/components/StockInput.vue';
import WeightInput from '@/components/WeightInput.vue';
import AvailableColorsSelect from '@/components/AvailableColorsSelect.vue';
import AvailableSizesSelect from '@/components/AvailableSizesSelect.vue';
import MaterialInput from '@/components/MaterialInput.vue';
import ProductFeaturesInput from '@/components/ProductFeaturesInput.vue';
import ShippingOptions from '@/components/ShippingOptions.vue';
import ReturnPolicySelect from '@/components/ReturnPolicySelect.vue';
import WarrantyPeriodInput from '@/components/WarrantyPeriodInput.vue';
import FileUpload from '@/components/FileUpload.vue';
import ProductTags from '@/components/ProductTags.vue';
import SEOKeywords from '@/components/SEOKeywords.vue';
import PublicationStatus from '@/components/PublicationStatus.vue';
import { v4 as uuidv4 } from 'uuid'; 


const productStore = useProductStore();
const { product } = productStore;

// Flag to track if the form is valid
const valid = ref(false);

onMounted(() => {
  product.id = uuidv4();
});

// Method to handle form submission
const onSubmit = () => {
  // Check if all required fields are filled out
  if (isFormValid()) {
    // Call resetForm if needed
    // productStore.resetForm();
    console.log("Form submitted with data:", product);
  } else {
    console.log("Form is invalid");
  }
};

// Watch for changes in the product object and validate
watch(
  () => product,
  () => {
    valid.value = isFormValid();
  },
  { deep: true }
);

// Check if all required fields are fulfilled
const isFormValid = () => {
  // Define required fields
  const requiredFields = [
    'name',
    'category',
    'brandName',
    'price',
    'taxCategory',
    // 'modelNumber',
    'currency', 
    'stockQuantity',
    'ProductDescriptionInput'
  ];

  // Check if all required fields are filled
  return requiredFields.every(field => product[field]?.trim() !== '');
};
</script>

<style scoped>
.product-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #8d8686;
  border-radius: 8px;
}

h2 {
  text-align: center;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
