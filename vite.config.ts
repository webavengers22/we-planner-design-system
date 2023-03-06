import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@theme', replacement: resolve(__dirname, 'src/theme') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@contexts', replacement: resolve(__dirname, 'src/contexts') },
      { find: '@stories', replacement: resolve(__dirname, 'src/stories') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
    ],
  },
});
