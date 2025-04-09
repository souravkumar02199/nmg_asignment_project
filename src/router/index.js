// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductForm from '@/views/ProductForm.vue'; // Import the Product Form View

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/DefaultHome.vue') // Optional: Home page
  },
  {
    path: '/product-form',
    name: 'ProductForm',
    component: ProductForm
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
