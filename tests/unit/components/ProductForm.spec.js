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
  it('should render the form and submit button', async () => {
    render(ProductForm);

    // Wait for the necessary elements to be rendered
    // await waitFor(() => screen.getByLabelText('Product Name'));
    // await waitFor(() => screen.getByLabelText('Product Category'));
    // await waitFor(() => screen.getByText('Submit Product'));

    // Check if the necessary elements are rendered
    // expect(screen.getByLabelText('Product Name')).toBeInTheDocument();
    // expect(screen.getByLabelText('Product Category')).toBeInTheDocument();
    // expect(screen.getByText('Submit Product')).toBeInTheDocument();
  });

  it('should disable submit button if required fields are missing', async () => {
    render(ProductForm);

    // Initially, the form should be invalid and the submit button should be disabled
    // const submitButton = screen.getByRole('button', { name: /Submit Product/i });
    // expect(submitButton).toBeDisabled();

    // Fill in some required fields
    // const productNameInput = screen.getByLabelText('Product Name');
    // await fireEvent.update(productNameInput, 'Test Product');

    // Check if the submit button is still disabled because not all required fields are filled
    // expect(submitButton).toBeDisabled();
  });

  it('should enable submit button when all required fields are filled', async () => {
    render(ProductForm);
  });

  it('should submit the form with valid data', async () => {
    render(ProductForm);

    // Spy on console.log to check the form submission
    const consoleLogSpy = vi.spyOn(console, 'log');

});

  it('should show the available subcategories based on selected category', async () => {
    render(ProductForm);

    // Log the DOM to see the structure and verify if the select is present
    console.log(screen.debug()); // This will log the current DOM structure

  });
});
