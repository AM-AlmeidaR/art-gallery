import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/art-gallery/', // nombre EXACTO del repo
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                location: resolve(__dirname, 'location.html')
            }
        }
    }
})
