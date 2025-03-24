import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import { env } from 'process';

const target = env.ENVIRONMENT == "Docker" ? `${env.BACKEND_HTTPS_URL}` : 'https://localhost:9091';
console.log(target)

export default defineConfig({
  plugins: [react()],
  server: { 
    host: true,
    proxy: {
        '/api': {
            target: target,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => {
              try {
                return path.replace(/^\/api/, '')
              }
              catch (ex) {
                console.log(ex)
              }
            },
        }
    },
    https: {
        key: fs.readFileSync(`${env.CERT_KEY_PATH}`),
        cert: fs.readFileSync(`${env.CERT_PATH}`),
        passphrase: "1234"
    }
  }
})
