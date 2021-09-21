import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'source/_less/main.less',
      formats: ['es']
    },
    outDir: 'source/css/'
  }
})
