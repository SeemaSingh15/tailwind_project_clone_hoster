import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this according to your local development setup
  plugins: [react()],
});
