'use client'

import { Box } from '@design-system-ui/primitives/layout'
import { ToasterV2 } from '@design-system-ui/primitives/toast'
import { TooltipProvider } from '@design-system-ui/primitives/tooltip'
import { ThemeProvider } from '@design-system-ui/theme'
import { ReactNode } from 'react'


type Props = {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <Box>
      {' '}
      <ThemeProvider
        // attribute="class"
        defaultTheme="system"
        storageKey="design-system-ui:theme"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
        <ToasterV2 />
      </ThemeProvider>
    </Box>
  )
}

export default Providers
