import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 监听所有地址
    port: 5173,       // 端口可改，默认5173
    allowedHosts: ['arraydance.xyz', 'www.arraydance.xyz']
  }
})
