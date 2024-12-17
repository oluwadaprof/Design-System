

import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Box } from '../layout'

type Props = React.HTMLAttributes<HTMLDivElement> & JsxStyleProps

function Skeleton({ ...props }: Props) {
  return <Box bg="sMutedBackground" rounded="xl" animation="pulsate" {...props} />
}

export { Skeleton }
