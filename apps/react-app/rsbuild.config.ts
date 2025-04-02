import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_provider',
      exposes: {
        './Button': './src/ui/Button.tsx',
      },
    }),
  ],
  server: {
    port: 3001,
  },
});
