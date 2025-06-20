import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shoes-landing/', // ⚠️ Yeh line zaroor likhna
})
