import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function checkNoExternalImagesPlugin(): Plugin {
  return {
    name: 'check-no-external-project-images',
    buildStart() {
      const filePath = path.resolve(__dirname, 'src/data/projectsData.ts');
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const externalUrlMatch = content.match(/https?:\/\/[^\s"']+\.(jpg|jpeg|png|webp|gif|svg)/i) ||
                                content.match(/https?:\/\/r\.mobirisesite\.com/i);
        if (externalUrlMatch) {
          throw new Error(`[Build-Time Error] External project image URL detected in projectsData.ts: ${externalUrlMatch[0]}. All images must be imported locally from src/assets/images/projects/`);
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), checkNoExternalImagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-lucide';
            }
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
