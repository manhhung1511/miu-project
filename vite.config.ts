import { URL, fileURLToPath } from "url";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      core: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: true, // thêm dòng này để app có thể được truy cập từ môi trường ngoài
    watch: {
        usePolling: true // thêm dòng này để xử lý lỗi với WSL
    }
  }
});


