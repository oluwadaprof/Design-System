'use client'

import { Icons } from "@design-system-ui/icons/base"
import { Button } from "@design-system-ui/primitives/button"
import { NextLink } from "@design-system-ui/primitives/link"
import { Heading, Span, Text } from "@design-system-ui/primitives/text"
import { Center, HStack, VStack } from "@design-system-ui/styled-system/jsx"



export default function GlobalError() {
 

  return (
    <html>
      <body>
        <Center h="100vh">
          <VStack gap="0" textAlign="center">
            <Heading
              as="h2"
              fontWeight="900"
              fontSize="14rem"
              color="transparent"
              bg="sGrayAlpha.9"
              textShadow="2px 2px 3px rgba(255,255,255,0.2)"
              bgClip="text"
              _dark={{
                textShadow: '2px 2px 3px rgba(0,0,0,0.2)'
              }}
            >
              Oops!
            </Heading>
            <Text
              fontSize="2.5"
              fontWeight="500"
              color="sAppMutedText"
              mt="3"
              mb="7"
              lineHeight="3"
            >
              Even things we love can break sometimes, please be patient as we put the pieces back
              together.
              <br /> In the meantime you can...
            </Text>
            <HStack>
              <Button size="xs" px="5">
                <Icons.refresh size={14} />
                <Span>Recover</Span>
              </Button>
              <NextLink href="/home" px="5">
                <Icons.home size={14} />
                <Span>Go Home</Span>
              </NextLink>
            </HStack>
          </VStack>
        </Center>
      </body>
    </html>
  )
}
