import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Motoru buradan çağırıyoruz

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin listesine ekledik
  ],
})