import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // Importamos el plugin de React

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // --- NUESTRAS ADICIONES ---
        plugins: [react()],          // 1. Añadimos el plugin de React
        base: '/web-correo-v5/',   // 2. Añadimos la ruta para GitHub Pages

        // --- TU CONFIGURACIÓN ORIGINAL (LA MANTENEMOS) ---
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
