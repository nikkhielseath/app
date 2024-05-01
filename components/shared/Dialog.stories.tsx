import { Meta, StoryObj } from "@storybook/react";
import Button from "components/shared/Button/button";
import { Dialog } from "./Dialog";

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: "Components/Shared/Dialog",
  component: Dialog,
  args: {
    trigger: <Button variant="primary">Open</Button>,
    title: "Welcome to the Dialog",
    description: "The Dialog is a wonderful place to store things",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec mauris at risus volutpat consequat ut a
        neque. Quisque laoreet ut urna sed semper. Integer pharetra augue magna, quis maximus augue mollis dignissim.
        Vivamus vestibulum lectus vitae purus aliquet, eget consequat lorem posuere. Nullam quis massa a enim efficitur
        facilisis. Etiam aliquam felis eu ligula accumsan suscipit. Integer nulla ligula, gravida vel sagittis ut,
        blandit sed eros.
      </p>
    ),
  },
};

export default meta;

export const Default: Story = {};
