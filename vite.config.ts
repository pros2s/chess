import { defineConfig } from 'vite';

import path from 'path';

import preact from '@preact/preset-vite';
import svgr from 'vite-plugin-svgr';

interface ViteConfigArgsType {
  mode: 'production' | 'development';
  command: string;
}

export default ({ mode }: ViteConfigArgsType) =>
  defineConfig({
    base: './',
    plugins: [preact(), svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    css: {
      modules: {
        generateScopedName:
          mode === 'development' ? '[name]_[local]__[hash:base64:5]' : '[name]__[hash:base64:5]',
      },
    },
  });
