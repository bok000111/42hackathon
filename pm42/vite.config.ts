import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false,
    //host: "yooh",
    port: 5173,
  },
  base : "/static/",
  build: {
    outDir: "static/dist/",
    manifest: true,
    modulePreload: true,
    assetsDir: 'assets/',
  },
});
