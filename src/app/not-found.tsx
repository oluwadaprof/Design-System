import { NextLink } from "@design-system-ui/primitives/link"
import { Heading, Text } from "@design-system-ui/primitives/text"
import { Center, VStack } from "@design-system-ui/styled-system/jsx"


export const metadata = {
  title: 'Not Found | Impulse CRM'
}

const NotFound = () => {
  return (
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
        <Text fontSize="2.5" fontWeight="500" color="sAppMutedText" mt="3" mb="7" lineHeight="3">
          What got you here is a mystery to us as it is to you.
          <br /> Let&apos; help you find your way back home.
        </Text>
        <NextLink href="/home" px="5">
          Go Back Home
        </NextLink>
      </VStack>
    </Center>
  )
}

export default NotFound
