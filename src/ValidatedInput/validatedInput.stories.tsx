import { Meta, StoryObj } from "@storybook/react";
import { ValidatedInput, ValidatedInputProps } from "./ValidatedInput";

// Configuración de Storybook para el componente ValidatedInput
const meta: Meta<typeof ValidatedInput> = {
  title: "Components/New/ValidatedInput",
  component: ValidatedInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" }
    },
    type: {
      options: ["text", "email", "password", "number"],
      control: { type: "radio" }
    },
    error: {
      control: "boolean"
    },
    minLength: {
      control: "number"
    }
  }
};

export default meta;

type Story = StoryObj<ValidatedInputProps>;

// Historias definidas directamente
export const Default: Story = {
  args: {
    label: "Username",
    type: "text",
    minLength: 3,
    errorMessage: "Debe tener al menos 3 caracteres.",
    size: "md",
    onChange: value => console.log("Input value:", value)
  }
};

export const EmailValidation: Story = {
  args: {
    label: "Email",
    type: "email",
    validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Debe ser un correo electrónico válido.",
    size: "md",
    onChange: value => console.log("Email value:", value)
  }
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    minLength: 6,
    errorMessage: "Debe tener al menos 6 caracteres.",
    size: "md",
    error: true
  }
};
