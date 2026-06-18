import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          workbox: {
            maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
          },
          manifest: {
            name: 'MagisCore',
            short_name: 'MagisCore',
            description: 'Магистратураға дайындық',
            theme_color: '#07090d',
            background_color: '#07090d',
            display: 'standalone',
            icons: [
              {
                src: 'logo no bg, white.svg',
                sizes: '512x512',
                type: 'image/svg+xml'
              }
            ]
          }
        })
      ],
      build: {
        target: 'esnext'
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
