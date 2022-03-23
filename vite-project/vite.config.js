import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import vueJsx from '@vitejs/plugin-vue-jsx';


export default defineConfig({
  plugins: [vue(),vueJsx(), visualizer()],
})