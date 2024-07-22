import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/crypto-app/', // Replace 'your-repo-name' with the name of your GitHub repository
  plugins: [react()]
})
