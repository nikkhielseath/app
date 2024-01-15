import { Meta, StoryObj } from "@storybook/react";
import Button from "components/atoms/Button/button";
import TextInput from "components/atoms/TextInput/text-input";
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

export const NoCancelButton: Story = {
  args: {
    cancelButton: false,
  },
};

export const CustomButtonText: Story = {
  args: {
    cancelButton: true,
    cancelButtonText: "Custom Cancel",
    confirmButtonText: "Custom Confirm",
  },
};

export const NoDescription: Story = {
  args: {
    description: undefined,
  },
};

export const NoTitleAndDescription: Story = {
  args: {
    title: undefined,
    description: undefined,
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: "destructive",
    title: "Delete Page",
    description: (
      <p>
        Are you sure you want to delete <span className="font-bold text-light-slate-12">some page to delete</span>? If
        you have data on this page that your team is using it would be difficult for your team to get access to track
        your project.
      </p>
    ),
    children: (
      <div className="w-max">
        <span className="font-bold text-light-slate-12">This action cannot be undone</span>
        <p>
          Type <span className="font-bold text-light-red-10">DELETE</span> in all caps to confirm
        </p>
        <TextInput />
      </div>
    ),
  },
};
