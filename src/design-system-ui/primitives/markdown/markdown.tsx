import ReactMarkdown from 'react-markdown'

import { Box } from '../layout'

export const Markdown = ({ children }: { children: string }) => {
  return (
    <Box
      css={{
        '& h1': {
          fontSize: '3',
          fontWeight: '500'
        },
        '& p': {
          mb: '1'
        },
        '& a': {
          color: 'sAppPrimaryText',
          textDecoration: 'underline'
        }
      }}
    >
      <ReactMarkdown>{children}</ReactMarkdown>
    </Box>
  )
}
