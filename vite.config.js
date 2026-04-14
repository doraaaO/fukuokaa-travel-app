// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // 注意：此處必須填入您的 GitHub 儲存庫名稱，前後保留斜線
  base: '/fukuoka-travel-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: '九州行程隨行助手',
        short_name: '福岡自駕',
        description: '2026 日本九州自駕與大眾運輸綜合旅遊小工具',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // 觸發全螢幕 App 模式的關鍵
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      // Workbox 設定，確保靜態資源皆被快取以利離線瀏覽
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})