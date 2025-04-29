import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Эмуляция __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  base: "/goit-react-hw-01/",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
});
