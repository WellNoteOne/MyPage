import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Valentin Sugai",
        short_name: "Portfolio VS",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1a1a1a",
        icons: [
          {
            src: "./android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/mypage/",
});
