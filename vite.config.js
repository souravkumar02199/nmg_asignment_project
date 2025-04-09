import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

export default defineConfig({
  plugins: [vue()], // Add the Vue plugin here
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure '@' maps to 'src/'
    },
  },
  test: {
    globals: true, // Enable global test APIs (like `describe`, `it`, etc.)
    environment: 'happy-dom', // Simulate DOM with happy-dom (an alternative to jsdom)
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure Vitest resolves the alias for tests as well
    },
  },
});
