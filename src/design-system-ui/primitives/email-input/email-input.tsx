import React from 'react'
import { ReactMultiEmail } from 'react-multi-email'
import 'react-multi-email/dist/style.css'

import { Box } from '../layout'

type Props = {
  emails: string[]
  setEmails: (emails: string[]) => void
}

export const EmailsInput = ({ emails, setEmails }: Props) => {
  const [currentValue, setCurrentValue] = React.useState<string>('')

  const handleBlur = () => {
    // Add the current value to the emails list if it's not empty
    if (currentValue.trim() !== '') {
      setEmails([...emails, currentValue.trim()])
      setCurrentValue('')
    }
  }
  return (
    <Box
      css={{
        '& .react-multi-email': {
          bg: 'transparent !important',
          border: 'none !important',
          w: '100% !important',
          p: '0 !important',
          _dark: {
            caretColor: 'sAppMutedText',
            color: 'white'
          },

          '& div[data-tag]': {
            bg: 'transparent !important',
            fontSize: '2',
            fontWeight: '400 !important',
            color: 'sAppText !important',
            border: 'subtle !important',
            rounded: 'full !important',
            px: '1',
            py: '0.5',
            mr: '0.5',

            '& div[data-tag-item]': {
              fontSize: '1'
            },

            '& span[data-tag-handle]': {
              fontSize: '2 !important',
              marginLeft: '1 !important'
            }
          },

          '& span[data-placeholder]': {
            color: 'sFormPlaceholder !important',
            py: '0 !important',
            px: '0 !important',
            lineHeight: '1 !important',
            mt: '-1.5 !important' // small hack to vertically center the placeholder
          },

          '& input': {
            bg: 'transparent',
            fontSize: '2',
            w: '100% !important',
            h: '100% !important',
            p: '0 !important',
            px: '2 !important',

            '&:focus': {
              bg: 'transparent'
            }
          }
        }
      }}
    >
      <ReactMultiEmail
        placeholder="Recipients"
        emails={emails}
        onChange={(_emails: string[]) => {
          setEmails(_emails)
        }}
        autoFocus={false}
        // onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        getLabel={(email, index, removeEmail) => {
          return (
            <div data-tag key={index}>
              <div data-tag-item>{email}</div>
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          )
        }}
      />
    </Box>
  )
}
