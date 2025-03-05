import { DocsPage } from "@storybook/addon-docs";
import type { Preview } from "@storybook/vue3";
import "../src/styles.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocsPage,
    },
  },
};

export default preview;
