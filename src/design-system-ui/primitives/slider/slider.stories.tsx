import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Slider, SliderProps } from './slider'
import { SliderRange, SliderRangeProps } from './slider-range'
import { SliderThumb, SliderThumbProps } from './slider-thumb'
import { SliderTrack, SliderTrackProps } from './slider-track'

type SliderComponentProps = SliderProps & {
  thumbSize?: SliderThumbProps['size']
  thumbLook?: SliderThumbProps['look']
  trackSize?: SliderTrackProps['size']
  trackLook?: SliderTrackProps['look']
  rangeSize?: SliderRangeProps['size']
  rangeLook?: SliderRangeProps['look']
}

const meta: Meta<SliderComponentProps> = {
  component: Slider,
  subcomponents: {
    SliderTrack: SliderTrack as React.ComponentType<any>,
    SliderRange: SliderRange as React.ComponentType<any>,
    SliderThumb: SliderThumb as React.ComponentType<any>
  },
  title: 'Components/Slider',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg']
    },
    step: {
      control: { type: 'number' }
    },
    min: {
      control: { type: 'number' }
    },
    max: {
      control: { type: 'number' }
    },
    // Custom controls for SliderThumb variants
    thumbSize: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Size of the SliderThumb',
      table: {
        category: 'SliderThumb'
      }
    },
    thumbLook: {
      control: 'select',
      options: ['purple', 'purpleOutline', 'error', 'success', 'usage'],
      description: 'Look of the SliderThumb',
      table: {
        category: 'SliderThumb'
      }
    },
    // Custom controls for SliderTrack variants
    trackSize: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Size of the SliderTrack',
      table: {
        category: 'SliderTrack'
      }
    },
    trackLook: {
      control: 'select',
      options: ['gray', 'grayOutline', 'success', 'successOutline'],
      description: 'Look of the SliderTrack',
      table: {
        category: 'SliderTrack'
      }
    },
    // Custom controls for SliderRange variants
    rangeSize: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Size of the SliderRange',
      table: {
        category: 'SliderRange'
      }
    },
    rangeLook: {
      control: 'select',
      options: ['purple', 'error', 'success', 'usage'],
      description: 'Look of the SliderRange',
      table: {
        category: 'SliderRange'
      }
    }
  }
} satisfies Meta<SliderComponentProps>

export default meta

type Story = StoryObj<SliderComponentProps>

export const Default: Story = {
  render: ({ thumbSize, thumbLook, trackSize, trackLook, rangeSize, rangeLook, ...args }) => (
    <Slider {...args}>
      <SliderTrack size={trackSize} look={trackLook}>
        <SliderRange size={rangeSize} look={rangeLook} />
      </SliderTrack>
      <SliderThumb size={thumbSize} look={thumbLook} />
    </Slider>
  ),
  args: {
    size: 'xs',
    step: 1,
    min: 0,
    max: 6,
    thumbSize: 'md',
    thumbLook: 'purple',
    trackSize: 'md',
    trackLook: 'gray',
    rangeSize: 'sm',
    rangeLook: 'success'
  }
}
