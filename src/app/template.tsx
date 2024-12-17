'use client'

import { FadeIn } from "@design-system-ui/primitives/framer"



const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <FadeIn
      w="full"
      h="full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </FadeIn>
  )
}

export default Template
