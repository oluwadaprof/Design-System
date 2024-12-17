import { action } from '@storybook/addon-actions'
import type { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { Button } from '../button'
import { Input } from '../input'
import { TooltipProvider } from '../tooltip'
import { Form } from './form'
import { FormControl } from './form-control'
import { FormField } from './form-field'
import { FormItem } from './form-item'
import { FormLabel } from './form-label'
import { FormMessage } from './form-message'

interface FormValues {
  firstName: string
}

const meta: Meta = {
  title: 'Form',
  component: Form,
  args: {
    use: 'md'
  },
  argTypes: {
    placeholder: { control: 'text' },
    use: {
      options: ['md', 'sm', 'xs'],
      control: { type: 'select' }
    },
    bg: { control: 'color' },
    onSubmit: { action: 'submitted' }
  }
}

export default meta

type Story = StoryFn<typeof Form>

const Template: Story = (args) => {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: ''
    }
  })

  const onSubmit = (data: FormValues) => {
    action('submitted')(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          rules={{ required: 'Firstname is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel mb="2.5">First Name</FormLabel>
              <FormControl>
                <Input {...args} {...field} />
              </FormControl>
              {form.formState.errors.firstName && (
                <FormMessage>{form.formState.errors.firstName.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <TooltipProvider>
          <Button mt="2" type="submit">
            Submit
          </Button>
        </TooltipProvider>
      </form>
    </Form>
  )
}

export const FormStory = Template.bind({})
