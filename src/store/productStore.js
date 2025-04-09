import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    product: {
      id:'',
      productImages: [],
      tags: [],
      name: '',
      seoKeywords: '',
      category: '',
      subCategory: '',
      productType: '',
      brandName: '',
      modelNumber: '',
      description: '',
      shortDescription: '',
      price: null,
      currency: '',
      discountType: 'No Discount',
      discountValue: null,
      taxCategory: '',
      stockQuantity: null,
      productWeight: null,
      weightUnit: 'kg',
      length: null,
      width: null,
      height: null,
      unit: 'cm',
      availableColors: [],
      availableSizes: [],
      material: '',
      productFeatures: [],
      shippingOptions: [],
      returnPolicy: '',
      warrantyPeriod: null,
      publicationStatus: 'Draft',
      publicationDate: null,
      
      
      
    },
    categories: [
      'Electronics',
      'Clothing',
      'Food & Beverages',
      'Home & Garden',
      'Beauty & Personal Care',
      'Other',
    ],
    subCategories: {
      Electronics: ['Mobile', 'Laptop', 'Headphones', 'Other'],
      Clothing: ['Tops', 'Bottoms', 'Footwear', 'Other'],
      'Food & Beverages': ['Snacks', 'Beverages', 'Other'],
      'Home & Garden': ['Furniture', 'Decor', 'Garden Tools', 'Other'],
      'Beauty & Personal Care': ['Skincare', 'Haircare', 'Makeup', 'Other'],
    },
    availableSizes: {
      Tops: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      Bottoms: ['28', '30', '32', '34', '36', '38', '40'],
      Footwear: ['6', '7', '8', '9', '10'],
    },
    shippingOptions: ['Standard', 'Express', 'Next Day', 'International'],
    taxCategories: ['Standard', 'Reduced', 'Exempt'],
    currencies: ['USD', 'EUR', 'GBP', 'INR', 'AUD'],
    returnPolicies: ['No Return', '7 Days', '30 Days'],
    colors: ['Red', 'Green', 'Blue', 'Black', 'White', 'Yellow'],
    productTypes: [], // Add productTypes to store
  }),

  actions: {
    // Set category and reset related fields
    setCategory(category) {
      this.product.category = category;
      this.product.subCategory = ''; // Reset subcategory when category changes
      this.product.availableColors = [];
      this.product.availableSizes = [];
      this.setProductTypes(); // Update productTypes when category changes
    },

    // Set subcategory and adjust product features like sizes and productTypes
    setSubCategory(subCategory) {
      this.product.subCategory = subCategory;
      this.setProductTypes(); // Update productTypes when subcategory changes
    },

    // Update productTypes based on category and subcategory
    setProductTypes() {
      if (this.product.category === 'Electronics') {
        if (this.product.subCategory === 'Mobile') {
          this.productTypes = ['Smartphone', 'Feature Phone'];
        } else if (this.product.subCategory === 'Laptop') {
          this.productTypes = ['Gaming Laptop', 'Ultrabook', 'Workstation'];
        } else {
          this.productTypes = [];
        }
      } else if (this.product.category === 'Clothing') {
        if (this.product.subCategory === 'Tops') {
          this.productTypes = ['T-Shirt', 'Shirt', 'Sweater'];
        } else if (this.product.subCategory === 'Bottoms') {
          this.productTypes = ['Jeans', 'Shorts', 'Trousers'];
        } else if (this.product.subCategory === 'Footwear') {
          this.productTypes = ['Sneakers', 'Boots', 'Sandals'];
        } else {
          this.productTypes = [];
        }
      } else {
        this.productTypes = [];
      }
    },

    // Set product type
    setProductType(productType) {
      this.product.productType = productType;
    },

    // Set tax category
    setTaxCategory(taxCategory) {
      if (this.taxCategories.includes(taxCategory)) {
        this.product.taxCategory = taxCategory;
      } else {
        console.error(`Invalid tax category: ${taxCategory}`);
      }
    },
    setShortDescription(shortDescription){
       this.product.shortDescription = shortDescription
    },

    // Reset form to initial state
    resetForm() {
      this.product = {
        productImages: [],
        name: '',
        category: '',
        subCategory: '',
        productType: '',
        brandName: '',
        modelNumber: '',
        description: '',
        shortDescription: '',
        price: null,
        currency: '',
        discountType: 'No Discount',
        discountValue: null,
        taxCategory: '',
        stockQuantity: null,
        productWeight: null,
        weightUnit: 'kg',
        length: null,
        width: null,
        height: null,
        unit: 'cm',
        availableColors: [],
        availableSizes: [],
        material: '',
        productFeatures: [],
        shippingOptions: [],
        returnPolicy: '',
        warrantyPeriod: null,
        publicationStatus: 'Draft',
        publicationDate: null,
        
        tags: [],
        seoKeywords: '',
      };
      this.productTypes = []; // Reset product types when form is reset
    },
  },
});
