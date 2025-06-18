import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Le dice a tu web que vivirá en la subcarpeta /web-correo-v5/ en GitHub.
  base: '/web-correo-v5/',

  // Especifica que la carpeta de salida para la compilación será 'docs'
  build: {
    outDir: 'docs'
  }
})