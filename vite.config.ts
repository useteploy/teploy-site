import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    dedupe: ["preact", "preact/hooks", "preact/compat", "preact-render-to-string"],
  },
});
