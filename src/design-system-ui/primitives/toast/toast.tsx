'use client'

import { buttonStyle } from '@design-system-ui/primitives/button'
import { css, cx } from '@design-system-ui/styled-system/css'
import { Toaster as Sonner, toast } from 'sonner'



type ToasterProps = React.ComponentProps<typeof Sonner>

const baseToastStyles = css({
  w: 'full',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  rounded: 'xl',
  p: '2.5',
  columnGap: '2.5'
})

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className={css({
        '& [data-type=loading]': {
          w: 'full',
          display: 'flex',
          alignItems: 'center',
          rounded: 'xl',
          p: '2.5',
          columnGap: '2.5',
          bg: 'white',
          border: 'subtle',
          shadow:
            'rgba(28, 40, 64, 0.04) 0px 0px 0px 1px inset, rgba(28, 40, 64, 0.12) 0px 4px 8px -4px, rgba(28, 40, 64, 0.16) 0px 4px 12px -2px'
        },

        '[data-theme="dark"] &': {
          '& [data-type=loading]': {
            bg: 'sAppPanelBackground',
            backdropFilter: 'blur(10px)'
          }
        }
      })}
      toastOptions={{
        unstyled: true,
        classNames: {
          title: css({ fontSize: '2', fontWeight: '500' }),
          description: css({ fontSize: '1', fontWeight: '500' }),
          default: cx(
            baseToastStyles,
            css({
              border: 'subtle',

              _light: {
                color: 'grayAlpha.12 !important',
                bg: 'rgba(255, 255, 255, 1) !important'
              },

              _dark: {
                color: 'darkGrayAlpha.12',
                bg: 'rgba(4, 2, 12, 0.75)'
              }
            })
          ),
          error: cx(
            baseToastStyles,
            css({
              border: 'error',

              _light: {
                bg: 'linear-gradient(90deg, token(colors.errorAlpha.10) 0%, token(colors.errorAlpha.7) 100%) !important'
              },

              _dark: {
                bg: 'linear-gradient(90deg, token(colors.darkErrorAlpha.5) 0%, token(colors.darkErrorAlpha.2) 100%)'
              }
            })
          ),
          success: cx(
            baseToastStyles,
            css({
              border: 'success',

              _light: {
                bg: 'linear-gradient(90deg, token(colors.successAlpha.10) 0%, token(colors.successAlpha.7) 100%) !important'
              },

              _dark: {
                bg: 'linear-gradient(90deg, token(colors.successAlpha.5) 0%, token(colors.successAlpha.2) 100%)'
              }
            })
          ),
          warning: cx(
            baseToastStyles,
            css({
              border: 'warning',

              _light: {
                bg: 'linear-gradient(90deg, token(colors.warningAlpha.11) 0%, token(colors.warningAlpha.8) 100%) !important'
              },

              _dark: {
                bg: 'linear-gradient(90deg, token(colors.darkWarningAlpha.5) 0%, token(colors.darkWarningAlpha.2) 100%)'
              }
            })
          ),
          info: cx(
            baseToastStyles,
            css({
              border: 'info',

              _light: {
                bg: 'linear-gradient(90deg, token(colors.infoAlpha.11) 0%, token(colors.infoAlpha.7) 100%) !important'
              },

              _dark: {
                bg: 'linear-gradient(90deg, token(colors.darkInfoAlpha.5) 0%, token(colors.darkInfoAlpha.2) 100%)'
              }
            })
          ),
          actionButton: cx(
            buttonStyle({ look: 'grayOutline', size: 'xs' }),
            css({ cursor: 'pointer' })
          )
        }
      }}
      {...props}
    />
  )
}

export { Toaster as ToasterV2, toast as toastV2 }
