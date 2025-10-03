import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // charge les variables .env selon le mode (development / production)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      port: Number(env.VITE_PORT),
      host: env.VITE_HOST
    }
  }
})
