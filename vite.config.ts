import { defineConfig } from 'vite';

import crypto from 'crypto';
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
        localsConvention: 'camelCase',
        generateScopedName: (_, filename, css) => {
          const splitted = filename.split('/');
          const exact = splitted[splitted.length - 1];

          const cssFileName = exact.split('.module.')[0];
          const hash = crypto.createHash('md5').update(css).digest('base64').substring(0, 5);

          const prodHash = crypto.createHash('md5').update(css).digest('base64').substring(0, 15);

          return mode === 'development' ? `${cssFileName}__${hash}` : prodHash;
        },
      },
    },
  });
