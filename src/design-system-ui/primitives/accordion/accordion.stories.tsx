import type { Meta, StoryFn } from '@storybook/react'

import { Span } from '../text'
import { Accordion } from './accordion'
import { AccordionCaret } from './accordion-caret'
import { AccordionContent } from './accordion-content'
import { AccordionItem } from './accordion-item'
import { AccordionTrigger } from './accordion-trigger'

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  args: {
    type: 'single',
    collapsible: false,
    disabled: false
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
      description: 'Defines whether the accordion is single or multiple'
    },
    collapsible: {
      control: 'boolean',
      description: 'Allows all items to be collapsed'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion'
    }
  }
}

export default meta

type Story = StoryFn<typeof Accordion>

const Template: Story = (args) => (
  <Accordion {...args}>
    <AccordionItem value="First">
      <AccordionTrigger>
        <Span>Accordion one</Span> <AccordionCaret />
      </AccordionTrigger>
      <AccordionContent>
        <Span>Lorem 1 ipsum dolor sit amet</Span>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Second">
      <AccordionTrigger>
        <Span>Accordion two</Span> <AccordionCaret />
      </AccordionTrigger>
      <AccordionContent>
        <Span>Lorem 2 ipsum dolor sit amet</Span>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const AccordionStory = Template.bind({})
AccordionStory.args = {
  type: 'single',
  collapsible: false,
  disabled: false
}
