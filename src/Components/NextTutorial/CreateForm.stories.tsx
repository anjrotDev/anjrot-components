import type { Meta, StoryObj } from "@storybook/react";
import { CreateForm, CreateFormState } from "./CreateForm";

const meta: Meta<typeof CreateForm> = {
  title: "Next Tutorial/CreateForm",
  component: CreateForm,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

const customers = [
  {
    _id: "672d3c6f3bfe9390161f1a66",
    name: "Liam Herrera",
    email: "liam.herrera@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/21.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a69",
    name: "Ben Dunn",
    email: "ben.dunn@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/99.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6c",
    name: "Travis Cruz",
    email: "travis.cruz@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/85.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6e",
    name: "Savannah Hale",
    email: "savannah.hale@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/90.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a70",
    name: "Allison Franklin",
    email: "allison.franklin@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/56.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a74",
    name: "Jeffrey Hart",
    email: "jeffrey.hart@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/63.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a79",
    name: "Matthew Riley",
    email: "matthew.riley@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/49.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7b",
    name: "Sue Long",
    email: "sue.long@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/15.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a80",
    name: "Aiden George",
    email: "aiden.george@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/6.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a67",
    name: "Edward Perkins",
    email: "edward.perkins@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/67.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a68",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6b",
    name: "Gloria Gray",
    email: "gloria.gray@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/29.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a72",
    name: "Tonya Barnes",
    email: "tonya.barnes@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/2.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a76",
    name: "Priscilla Stevens",
    email: "priscilla.stevens@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/0.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a78",
    name: "Amanda Morris",
    email: "amanda.morris@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/86.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7c",
    name: "Jeffrey Mccoy",
    email: "jeffrey.mccoy@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/92.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7e",
    name: "Eva Ramos",
    email: "eva.ramos@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/96.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a81",
    name: "Willard Owens",
    email: "willard.owens@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/67.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a82",
    name: "Mabel Gonzales",
    email: "mabel.gonzales@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/73.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6d",
    name: "Craig Chapman",
    email: "craig.chapman@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/6.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6f",
    name: "Kevin Sullivan",
    email: "kevin.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/69.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a71",
    name: "Chloe Lawrence",
    email: "chloe.lawrence@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/61.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a73",
    name: "Sergio Diaz",
    email: "sergio.diaz@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/81.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a75",
    name: "Alice Peterson",
    email: "alice.peterson@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/18.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a77",
    name: "Leo Gregory",
    email: "leo.gregory@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/85.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a83",
    name: "Zoe Adams",
    email: "zoe.adams@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/92.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a6a",
    name: "Tyler Prescott",
    email: "tyler.prescott@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/65.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7a",
    name: "Brandy Wright",
    email: "brandy.wright@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/61.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7d",
    name: "Bob Hoffman",
    email: "bob.hoffman@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/28.jpg"
  },
  {
    _id: "672d3c6f3bfe9390161f1a7f",
    name: "Kristina Holland",
    email: "kristina.holland@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/96.jpg"
  }
];
const state: CreateFormState = { message: null, errors: {} };

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customers: customers,
    state: state
  }
};
