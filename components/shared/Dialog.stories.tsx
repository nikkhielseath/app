import { Meta, StoryObj } from "@storybook/react";
import Button from "components/atoms/Button/button";
import { Dialog } from "./Dialog";

type Story = StoryObj<typeof Dialog>;
const meta: Meta<typeof Dialog> = {
  title: "Components/Shared/Dialog",
  component: Dialog,
  args: {
    title: "This is a dialog",
    description: "This is a description",
    variant: "default",
    trigger: <Button variant="primary">Open Dialog</Button>,
    overlay: true,
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>,
    onConfirm: () => {},
  },
};

export default meta;

export const Default: Story = {};

export const WithCancelButton: Story = {
  args: {
    cancelButton: true,
  },
};

export const WithCustomButtonText: Story = {
  args: {
    cancelButton: true,
    cancelButtonText: "Custom Cancel",
    confirmButtonText: "Custom Confirm",
  },
};

export const WithNoDescription: Story = {
  args: {
    description: undefined,
  },
};
