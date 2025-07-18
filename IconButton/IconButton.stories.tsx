import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from "./IconButton";

// Simple icon for testing
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default {
  title: "Components/IconButton",
  component: IconButton,
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
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    "aria-label": {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

// Default story (uses ghost variant as per component default)
export const Default = Template.bind({});
Default.args = {
  icon: <StarIcon />,
  "aria-label": "Favorite",
};

// Loading state
export const Loading = Template.bind({});
Loading.args = {
  icon: <StarIcon />,
  "aria-label": "Loading",
  loading: true,
};
