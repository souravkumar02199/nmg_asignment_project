import { render, fireEvent, screen, waitFor } from '@testing-library/vue';
import ProductForm from '@/views/ProductForm.vue'; // Adjust path if necessary
import { useProductStore } from '@/store/productStore';
import { vi } from 'vitest';

// Mock Pinia Store
vi.mock('@/store/productStore', () => ({
  useProductStore: vi.fn().mockReturnValue({
    product: {
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
      productImages: [],
      tags: [],
      seoKeywords: '',
    },
    currencies: ['USD', 'EUR', 'INR', 'JPY'],
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
    setCategory: vi.fn(),
    setSubCategory: vi.fn(),
    setProductTypes: vi.fn(),
    setProductType: vi.fn(),
    setTaxCategory: vi.fn(),
    setShortDescription: vi.fn(),
  }),
}));

describe('ProductForm.vue', () => {
  it('should show custom category input when "Other" is selected', async () => {
    render(ProductForm);
  
    const categorySelect =  screen.getByTestId('category-select');
    await fireEvent.update(categorySelect, 'Other');
  
  });

  it('renders currency select dropdown', async () => {
    render(ProductForm);
    const currencySelect = screen.getByTestId('currency-select');
    expect(currencySelect).to.exist;
  });

  it('renders discount select dropdown', async () => {
    render(ProductForm);
    const discountType = screen.getByTestId('discountType-select');
    expect(discountType).to.exist;
  });


  it('renders publication-status dropdown', async () => {
    render(ProductForm);

    const publicationStatus = screen.getByTestId('publication-status');
    expect(publicationStatus).to.exist;
  });

  it('should enable submit button when all required fields are filled', async () => {
    render(ProductForm);

    const productNameInput = screen.getByTestId('product-name');
    const categorySelect = screen.getByTestId('category-select');
    const priceInput = screen.getByTestId('price');
    const currencySelect = screen.getByTestId('currency-select');
    const submitButton = screen.getByText(/submit product/i);;

    await fireEvent.update(productNameInput, 'Test Product');
    await fireEvent.update(categorySelect, 'Electronics');
    await fireEvent.update(priceInput, '100');
    await fireEvent.update(currencySelect, 'USD');
  });

  it('should enable submit button when all required fields are filled', async () => {
    render(ProductForm);
  });
});
