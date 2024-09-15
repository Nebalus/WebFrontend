import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  console.log(`CURRENT COMMAND: ${command}`);
  console.log(`CURRENT MODE: ${mode}`);

  return {
    plugins: [react()],
    resolve: {
        alias: {
          "@": "/src",
          "@assets": "/assets",
        },
    }
  }
});
