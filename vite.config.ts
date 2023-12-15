/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './src/tests/vitest.setup.ts',
    environment: 'jsdom',

    // vitest don't know how to cleanup React-testing-library. it can be fixed:
    // - by manual setting "afterEach" with RTL "cleanup" in vitest.setup.ts
    // - or by "globals" below
    // https://github.com/testing-library/vue-testing-library/issues/296
    globals: true,
  },
});
