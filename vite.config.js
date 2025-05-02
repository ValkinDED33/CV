import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    outDir: "dist",
  },
  base: "/CV/", // обязательно: имя репозитория
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
});
