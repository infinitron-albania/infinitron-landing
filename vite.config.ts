import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Production (Plesk) serves from the domain root; the GitHub Pages dev build sets BASE_PATH=/infinitron-landing/
  base: process.env.BASE_PATH || '/',
  plugins: [
      react(),
      tailwindcss()
  ],
})
