import { Button } from '@design-system-ui/primitives/button'
import { FadeIn } from '@design-system-ui/primitives/framer'
import { Text } from '@design-system-ui/primitives/text'
import { Box } from '@design-system-ui/styled-system/jsx'

const Home = () => {
  return (
    <FadeIn bg="background.app" h="screenY" w="full">
      <Text fontSize='8'  color='text.muted'>Hello World</Text>
      <Text fontSize='8'  color='text.app'>Hello World</Text>
      <Button w="full" look='brand' size='md'>Click me</Button>
    </FadeIn>
  )
}

export default Home
