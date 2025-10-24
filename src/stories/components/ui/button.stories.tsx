import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { action } from "storybook/actions";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    onClick: action("Button clicked"),
  },
  argTypes: {
    asChild: {
      name: "asChild",
      table: {
        type: { summary: "boolean" },
      }
    },
    variant: {
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      control: { type: "select" },
      table: {
        type: { summary: "enum (string)", detail: "default | destructive | outline | secondary | ghost | link" },
        defaultValue: { summary: "default" },
      }
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "inline-radio" },
      table: {
        type: { summary: "enum (string)", detail: "default | sm | lg | icon" },
      },
      defaultValue: "default",
    },
    disabled: {
      control: { type: "boolean", defaultValue: false },
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: false,
    },
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClick: {
      table: {
        type: { summary: "function" },
        category: "Events",
      },
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Primary",
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
}

export const Custom: Story = {
  name: "Custom",
  args: {
    children: "Custom",
    variant: "outline",
  },
  render: (props) => (
    <Button {...props}>
      <span className="mr-1">🔥</span>
      Customized
    </Button>

  )
}