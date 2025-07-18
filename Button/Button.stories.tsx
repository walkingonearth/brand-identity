import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

// Icon examples for testing
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "light-grey",
      values: [
        {
          name: "light-grey",
          value: "#f5f5f5",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "enclosed-primary",
        "enclosed-secondary",
        "ghost",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["start", "end"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  children: "Button Text",
  variant: "primary",
  size: "medium",
};

// Primary variants
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "medium",
};

export const EnclosedPrimary = Template.bind({});
EnclosedPrimary.args = {
  children: "Enclosed Primary",
  variant: "enclosed-primary",
  size: "medium",
};

export const EnclosedSecondary = Template.bind({});
EnclosedSecondary.args = {
  children: "Enclosed Secondary",
  variant: "enclosed-secondary",
  size: "medium",
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Ghost Button",
  variant: "ghost",
  size: "medium",
};

// Size variants
export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  variant: "primary",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium Button",
  variant: "primary",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  variant: "primary",
  size: "large",
};

// State variants
export const Loading = Template.bind({});
Loading.args = {
  children: "Loading Button",
  variant: "primary",
  size: "medium",
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  size: "medium",
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Full Width Button",
  variant: "primary",
  size: "medium",
  fullWidth: true,
};

// Icon variants
export const WithIconStart = Template.bind({});
WithIconStart.args = {
  children: "Download",
  variant: "enclosed-primary",
  size: "medium",
  icon: <DownloadIcon />,
  iconPosition: "start",
};

export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  children: "Favorite",
  variant: "enclosed-secondary",
  size: "medium",
  icon: <StarIcon />,
  iconPosition: "end",
};
