import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/univision-api': {
            target: 'https://univision.kz',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/univision-api/, '')
          }
        }
      },
      plugins: [
        tailwindcss(),
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          workbox: {
            skipWaiting: true,
            clientsClaim: true,
            cleanupOutdatedCaches: true,
            maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-cache',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365
                  }
                }
              },
              {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-gstatic',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365
                  }
                }
              },
              {
                urlPattern: /\.(?:mp3|wav|ogg)$/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'audio-cache',
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                  }
                }
              }
            ]
          },
          manifest: {
            name: 'MagisCore — Магистратураға Дайындық',
            short_name: 'MagisCore',
            description: 'КТ-ге дайындық: 7000+ сұрақ, 4 мамандық',
            theme_color: '#f8fafc',
            background_color: '#f8fafc',
            display: 'standalone',
            orientation: 'portrait',
            start_url: '/',
            scope: '/',
            icons: [
              {
                src: 'logo no bg, white.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      build: {
        target: 'esnext',
        sourcemap: mode === 'development',
        cssCodeSplit: true,
        chunkSizeWarningLimit: 300,
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Firebase chunks — only one bundle for all Firebase
              if (id.includes('firebase/')) {
                return 'firebase';
              }
              // Core React vendor
              if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
                return 'vendor';
              }
              // React Router
              if (id.includes('react-router')) {
                return 'vendor';
              }
              // UI icons (lucide)
              if (id.includes('lucide-react')) {
                return 'ui-icons';
              }
              // Helmet
              if (id.includes('react-helmet-async')) {
                return 'vendor';
              }
              // Audio/question data (large but rarely used)
              if (id.includes('/data/questions/')) {
                return 'question-data';
              }
            }
          }
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(''),
        'process.env.GEMINI_API_KEY': JSON.stringify(''),
        'process.env.DASHSCOPE_API_KEY': JSON.stringify(''),
        'process.env.DASHSCOPE_API_URL': JSON.stringify('')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
