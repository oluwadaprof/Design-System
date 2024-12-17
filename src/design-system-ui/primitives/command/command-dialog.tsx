import { DialogProps } from '@radix-ui/react-dialog'



import { Dialog, DialogContent } from '../dialog'
import { Command } from './command'
import { css } from '@design-system-ui/styled-system/css'

type CommandDialogProps = {
  dialogContentStyles?: string
} & DialogProps

const dialogCommandStyles = css({})

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent overflow="hidden" p="0">
        <Command className={dialogCommandStyles}>{children}</Command>
      </DialogContent>
    </Dialog>
  )
}
