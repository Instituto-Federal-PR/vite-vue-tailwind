import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // linha adiocinada

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),], // linha alterada
})
