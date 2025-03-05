import type { Meta, StoryFn } from "@storybook/vue3";
import PrismaButton from "./PrismaButton.vue";

export default {
  title: "PrismaDS/PrismaButton",
  component: PrismaButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      // Opções disponíveis no controle do Storybook
      control: {
        type: "select",
        options: ["financas", "contabil", "antecipa", "outline", "link"],
      },
      // Descrição na documentação
      description: "Define o estilo do botão", // Descrição na documentação
      options: ["financas", "contabil", "antecipa", "outline", "link"],
      table: {
        type: { summary: "financas | contabil | antecipa | outline | link" },
        defaultValue: {
          summary: "financas",
        },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["normal", "small", "large"],
      },
      description: "Define o tamanho do botão",
      options: ["normal", "small", "large"],
      table: {
        type: { summary: "normal | small | large" },
        defaultValue: {
          summary: "normal",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Define se o botão está desabilitado",
      options: ["normal", "small", "large"],
      table: {
        type: { summary: "true | false" },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `O componente \`PrismaButton\` é um botão customizável. Ele pode ter diferentes variantes, tamanhos e estados de ativação.`,
      },
    },
  },
} as Meta<typeof PrismaButton>;

const Template: StoryFn<typeof PrismaButton> = (args) => ({
  components: { PrismaButton },
  setup() {
    return { args };
  },
  template: `<PrismaButton v-bind="args">{{ args.slotText || 'Clique aqui' }}</PrismaButton>`, // O texto agora vem via slot
});

export const Financas = Template.bind({});
Financas.args = {};

export const Contabil = Template.bind({});
Contabil.args = {
  variant: "contabil",
  size: "normal",
  disabled: false,
};

export const Antecipa = Template.bind({});
Antecipa.args = {
  variant: "antecipa",
  size: "normal",
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "normal",
  disabled: false,
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  size: "normal",
  disabled: false,
};
