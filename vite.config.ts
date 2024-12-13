import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/cesium/Build/Cesium/Workers',
          dest: 'Cesium'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/ThirdParty',
          dest: 'Cesium'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Assets',
          dest: 'Cesium'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Widgets',
          dest: 'Cesium'
        }
      ]
    })
  ]
})
