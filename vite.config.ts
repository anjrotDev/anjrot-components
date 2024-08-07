import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const storybookBuild = process.env.STORYBOOK_BUILD === "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), !storybookBuild && dts({ rollupTypes: true })].filter(Boolean),
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "anjrot-components",
      fileName: "anjrot-components"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  }
});
