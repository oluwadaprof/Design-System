import { Box, styled } from '@design-system-ui/styled-system/jsx'
import { StyledComponent } from '@design-system-ui/styled-system/types'
import { SVGProps } from 'react'



export type IconProps = SVGProps<SVGSVGElement> & {
  size?: string | number
}

export type TIcon = StyledComponent<(props: IconProps) => JSX.Element>

export const BrandIcons = {
  aiStar: styled((props: IconProps) => {
    return (
      <svg
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 12 12"
         fill={props.fill || 'none'}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          // style="mix-blend-mode:screen"
          style={{ mixBlendMode: 'screen' }}
          d="M4.5 3.25C4.5 3.1637 4.43004 3.09375 4.34375 3.09375C3.82598 3.09375 3.40625 2.67402 3.40625 2.15625C3.40625 2.06995 3.33629 2 3.25 2C3.1637 2 3.09375 2.06995 3.09375 2.15625C3.09375 2.67402 2.67402 3.09375 2.15625 3.09375C2.06995 3.09375 2 3.1637 2 3.25C2 3.33629 2.06995 3.40625 2.15625 3.40625C2.67402 3.40625 3.09375 3.82598 3.09375 4.34375C3.09375 4.43004 3.1637 4.5 3.25 4.5C3.33629 4.5 3.40625 4.43004 3.40625 4.34375C3.40625 3.82598 3.82598 3.40625 4.34375 3.40625C4.43004 3.40625 4.5 3.33629 4.5 3.25Z"
          fill="url(#paint0_linear_1602_50962)"
        />
        <path
          d="M4.5 3.25C4.5 3.1637 4.43004 3.09375 4.34375 3.09375C3.82598 3.09375 3.40625 2.67402 3.40625 2.15625C3.40625 2.06995 3.33629 2 3.25 2C3.1637 2 3.09375 2.06995 3.09375 2.15625C3.09375 2.67402 2.67402 3.09375 2.15625 3.09375C2.06995 3.09375 2 3.1637 2 3.25C2 3.33629 2.06995 3.40625 2.15625 3.40625C2.67402 3.40625 3.09375 3.82598 3.09375 4.34375C3.09375 4.43004 3.1637 4.5 3.25 4.5C3.33629 4.5 3.40625 4.43004 3.40625 4.34375C3.40625 3.82598 3.82598 3.40625 4.34375 3.40625C4.43004 3.40625 4.5 3.33629 4.5 3.25Z"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          d="M8.25 3C8.25 2.86193 8.13805 2.75 8 2.75C7.86195 2.75 7.75 2.86193 7.75 3C7.75 4.24244 6.7426 5.25 5.5 5.25C5.36195 5.25 5.25 5.36195 5.25 5.5C5.25 5.63805 5.36195 5.75 5.5 5.75C6.74265 5.75 7.75 6.7571 7.75 8C7.75 8.13805 7.86195 8.25 8 8.25C8.13805 8.25 8.25 8.13805 8.25 8C8.25 6.75705 9.25705 5.75 10.5 5.75C10.638 5.75 10.75 5.63805 10.75 5.5C10.75 5.36195 10.638 5.25 10.5 5.25C9.2571 5.25 8.25 4.24246 8.25 3Z"
          fill="url(#paint1_linear_1602_50962)"
        />
        <path
          d="M8.25 3C8.25 2.86193 8.13805 2.75 8 2.75C7.86195 2.75 7.75 2.86193 7.75 3C7.75 4.24244 6.7426 5.25 5.5 5.25C5.36195 5.25 5.25 5.36195 5.25 5.5C5.25 5.63805 5.36195 5.75 5.5 5.75C6.74265 5.75 7.75 6.7571 7.75 8C7.75 8.13805 7.86195 8.25 8 8.25C8.13805 8.25 8.25 8.13805 8.25 8C8.25 6.75705 9.25705 5.75 10.5 5.75C10.638 5.75 10.75 5.63805 10.75 5.5C10.75 5.36195 10.638 5.25 10.5 5.25C9.2571 5.25 8.25 4.24246 8.25 3Z"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          d="M3.75 6.25C3.75 6.11195 3.63807 6 3.5 6C3.36193 6 3.25 6.11195 3.25 6.25C3.25 7.07845 2.57843 7.75 1.75 7.75C1.61193 7.75 1.5 7.86195 1.5 8C1.5 8.13805 1.61193 8.25 1.75 8.25C2.57843 8.25 3.25 8.92155 3.25 9.75C3.25 9.88805 3.36193 10 3.5 10C3.63807 10 3.75 9.88805 3.75 9.75C3.75 8.92155 4.42157 8.25 5.25 8.25C5.38805 8.25 5.5 8.13805 5.5 8C5.5 7.86195 5.38805 7.75 5.25 7.75C4.42157 7.75 3.75 7.07845 3.75 6.25Z"
          fill="url(#paint2_linear_1602_50962)"
        />
        <path
          d="M3.75 6.25C3.75 6.11195 3.63807 6 3.5 6C3.36193 6 3.25 6.11195 3.25 6.25C3.25 7.07845 2.57843 7.75 1.75 7.75C1.61193 7.75 1.5 7.86195 1.5 8C1.5 8.13805 1.61193 8.25 1.75 8.25C2.57843 8.25 3.25 8.92155 3.25 9.75C3.25 9.88805 3.36193 10 3.5 10C3.63807 10 3.75 9.88805 3.75 9.75C3.75 8.92155 4.42157 8.25 5.25 8.25C5.38805 8.25 5.5 8.13805 5.5 8C5.5 7.86195 5.38805 7.75 5.25 7.75C4.42157 7.75 3.75 7.07845 3.75 6.25Z"
          fill="white"
          fillOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1602_50962"
            x1="1.5"
            y1="10"
            x2="10.75"
            y2="10.0012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E59CFF" />
            <stop offset="0.5" stop-color="#BA9CFF" />
            <stop offset="1" stop-color="#9CB2FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1602_50962"
            x1="1.5"
            y1="10"
            x2="10.75"
            y2="10.0012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E59CFF" />
            <stop offset="0.5" stop-color="#BA9CFF" />
            <stop offset="1" stop-color="#9CB2FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1602_50962"
            x1="1.5"
            y1="10"
            x2="10.75"
            y2="10.0012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E59CFF" />
            <stop offset="0.5" stop-color="#BA9CFF" />
            <stop offset="1" stop-color="#9CB2FF" />
          </linearGradient>
        </defs>
      </svg>
    )
  }),
  aiCircle: styled((props: IconProps) => {
    return (
      <Box bg="linear-gradient(93.34deg, #733DFF 30.09%, #7DC1FF 63.89%)" p="0.5" rounded="50%">
        <Box
          w={props.size || '1rem'}
          h={props.size || '1rem'}
          // w="1.1rem"
          // h="1.1rem"
          bg="sAppBackground"
          rounded="full"
          flexShrink="0"
        />
      </Box>
    )
  })
}
