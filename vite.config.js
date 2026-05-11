import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL is https://<user>.github.io/<repo>/ — CI sets VITE_BASE_PATH (see .github/workflows).
const pagesBase = process.env.VITE_BASE_PATH?.trim()
const base =
  pagesBase && pagesBase !== '/'
    ? (pagesBase.startsWith('/') ? pagesBase : `/${pagesBase}`).replace(/\/+$/, '') + '/'
    : '/'

// https://vite.dev/config/shared-options.html#base
export default defineConfig({
  plugins: [react()],
  base,
})
