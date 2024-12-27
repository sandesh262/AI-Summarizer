import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Set the desired port, you can change this if needed
    open: true, // Automatically open the browser
  },
});
