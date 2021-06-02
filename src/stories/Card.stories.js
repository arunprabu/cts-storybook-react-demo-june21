import React from 'react';

import { Card } from './Card';

// determines where your story goes in the story list
export default {
  title: 'Example/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />;

export const CardXL = Template.bind({});
CardXL.args = {
  layout: 'card',
  variant: 'cardXl',
  label: 'XL Card',
};

export const CardMd = Template.bind({});
CardMd.args = {
  layout: 'card',
  variant: 'cardMd',
  label: 'Md Card',
};
