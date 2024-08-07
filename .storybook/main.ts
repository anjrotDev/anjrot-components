import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      exclude: ["vite-plugin-dts"]
    };
    return config;
  }
};
export default config;
