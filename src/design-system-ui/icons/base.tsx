import { css } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { StyledComponent } from '@design-system-ui/styled-system/types'
import { SVGProps } from 'react'



export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
  fill?: string
  color?: string
}

export type TIcon = StyledComponent<(props: IconProps) => JSX.Element>

export const Icons = {
  cloudSync: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17.5 18C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9C17.4925 9 17.485 9.00002 17.4776 9.00005M17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227M17.4776 9.00005C17.4131 9.71494 17.2119 10.3904 16.9003 11M6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.419 3.71776 17.4367 6 17.9M6.52042 8.0227C6.67826 8.00768 6.83823 8 7 8C8.12582 8 9.16474 8.37209 10.0005 9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 19C9 19 10 19 11 21C11 21 14.1765 16 17 15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  caretDoubleRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  sidebarIn: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM7.97 2v20"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.97 9.44 12.41 12l2.56 2.56"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  sidebarOut: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 3.5L14.5 20.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19 7H17.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 11H17.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10L9.22654 11.0572C9.74218 11.5016 10 11.7239 10 12C10 12.2761 9.74218 12.4984 9.22654 12.9428L8 14"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  card: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16H11.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 16L18 16"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2 9H22" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    )
  }),
  sidebar: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path d="M14.5 3L14.5 21" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinejoin="round" />
        <path
          d="M18 7H19M18 10H19"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  home: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  arrange: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 4.5C3 3.67157 3.67157 3 4.5 3H6.5C7.32843 3 8 3.67157 8 4.5V6.5C8 7.32843 7.32843 8 6.5 8H4.5C3.67157 8 3 7.32843 3 6.5V4.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M3 17.5C3 16.6716 3.67157 16 4.5 16H6.5C7.32843 16 8 16.6716 8 17.5V19.5C8 20.3284 7.32843 21 6.5 21H4.5C3.67157 21 3 20.3284 3 19.5V17.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M7.99977 18.5H20.9998M15.9998 5.5H7.99977M16.3233 7.67649L7.64844 16.3513"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 4.5C16 3.67157 16.6716 3 17.5 3H19.5C20.3284 3 21 3.67157 21 4.5V6.5C21 7.32843 20.3284 8 19.5 8H17.5C16.6716 8 16 7.32843 16 6.5V4.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M18 21L19.3883 20.0537C20.4628 19.3213 21 18.9551 21 18.5C21 18.0449 20.4628 17.6787 19.3883 16.9463L18 16"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  gallery: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  qr: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 6C3 4.58579 3 3.87868 3.43934 3.43934C3.87868 3 4.58579 3 6 3C7.41421 3 8.12132 3 8.56066 3.43934C9 3.87868 9 4.58579 9 6C9 7.41421 9 8.12132 8.56066 8.56066C8.12132 9 7.41421 9 6 9C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15C7.41421 15 8.12132 15 8.56066 15.4393C9 15.8787 9 16.5858 9 18C9 19.4142 9 20.1213 8.56066 20.5607C8.12132 21 7.41421 21 6 21C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M3 12L9 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V8"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6C15 4.58579 15 3.87868 15.4393 3.43934C15.8787 3 16.5858 3 18 3C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9C16.5858 9 15.8787 9 15.4393 8.56066C15 8.12132 15 7.41421 15 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M21 12H15C13.5858 12 12.8787 12 12.4393 12.4393C12 12.8787 12 13.5858 12 15M12 17.7692V20.5385M15 15V16.5C15 17.9464 15.7837 18 17 18C17.5523 18 18 18.4477 18 19M16 21H15M18 15C19.4142 15 20.1213 15 20.5607 15.44C21 15.8799 21 16.5881 21 18.0043C21 19.4206 21 20.1287 20.5607 20.5687C20.24 20.8898 19.7767 20.9766 19 21"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }),
  computerAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M11.5046 2H10.0039C6.72304 2 5.08264 2 3.91983 2.81382C3.48962 3.1149 3.11544 3.48891 2.81421 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81421 16.0811C3.11544 16.5111 3.48962 16.8851 3.91983 17.1862C5.08264 18 6.72304 18 10.0039 18H14.0058C17.2866 18 18.927 18 20.0898 17.1862C20.52 16.8851 20.8942 16.5111 21.1954 16.0811C21.8241 15.1837 21.9674 14.0017 22 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 6H18M18 6L22 6M18 6L18 2M18 6V10"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 15H13"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 18V22" stroke={props.color || 'currentColor'} strokeWidth="1.5" />
        <path d="M8 22H16" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }),
  pin: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="12" x2="12" y1="17" y2="22" />
        <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
      </svg>
    )
  }),
  activity: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m7.33 14.49 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  add: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M6 12h12M12 18V6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  addSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  arrowUp: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M18.07 9.57L12 3.5 5.93 9.57M12 20.5V3.67"
        ></path>
      </svg>
    )
  }),
  arrowDown: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
        ></path>
      </svg>
    )
  }),
  arrowLeft: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
        ></path>
      </svg>
    )
  }),
  arrowRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
        ></path>
      </svg>
    )
  }),
  category2: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  clock: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  messages: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  note: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8 2v3M16 2v3M7 13h8M7 17h5M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  command: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M16 8H8v8h8V8ZM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3ZM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3ZM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3ZM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  tickSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m7.75 12 2.83 2.83 5.67-5.66"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  eye: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  eyeSlash: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  flag: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  kanban: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M6 5v11" />
        <path d="M12 5v6" />
        <path d="M18 5v14" />
      </svg>
    )
  }),
  trendDown: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m16.5 14.5-4.2-4.2-1.6 2.4-3.2-3.2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 14.5h2v-2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  trendUp: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m16.5 9.5-4.2 4.2-1.6-2.4-3.2 3.2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 9.5h2v2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  elementPlus: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 17.5h6M17.5 20.5v-6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
    )
  }),
  folderOpen: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m21.67 14.3-.4 5c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M3.5 11.43V6.28c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79M9.43 17h5.14"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  message: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  messageNotif: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  messageSearch: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  mirroringScreen: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.69 11.71c4.62.59 8.01 3.99 8.61 8.61M2.62 15.07c3.39.43 5.88 2.93 6.32 6.32M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  task: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  taskSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  lock: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path d="M12 16.5V14.5" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  sms: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  smsEdit: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M19.21 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.7 15.28c.3 1.08 1.14 1.92 2.22 2.22"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  smsNotif: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  smsSearch: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  smsStar: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m19.48 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  smsTracking: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  paperClip: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m12.33 12.15-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  magicStar: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    )
  }),
  noteRemove: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM7 11h6M7 16h2.62"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  noteAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M16 2V4M11 2V4M6 2V4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 14L17.5 22M21.5 18L13.5 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M7 15H11M7 10H15" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   width={props.size || 16}
      //   height={props.size || 16}
      //   viewBox="0 0 24 24"
      //    fill={props.fill || 'none'}
      //   {...props}
      // >
      //   <path
      //     d="M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM7 11h6M7 16h2.62"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeMiterlimit="10"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      //   <path
      //     d="M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeMiterlimit="10"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      //   <path
      //     d="M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      // </svg>
    )
  }),
  dollarSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  dollar: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 2.5V4.21M12.5 21.5V19.79"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  link: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  unlink: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
        <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
        <line x1="8" x2="8" y1="2" y2="5" />
        <line x1="2" x2="5" y1="8" y2="8" />
        <line x1="16" x2="16" y1="19" y2="22" />
        <line x1="19" x2="22" y1="16" y2="16" />
      </svg>
    )
  }),
  star: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  user: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  userAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 14V20M22 17L16 17"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   width={props.size || 16}
      //   height={props.size || 16}
      //   viewBox="0 0 24 24"
      //    fill={props.fill || 'none'}
      //   {...props}
      // >
      //   <path
      //     d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      //   <path
      //     d="M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM19.49 17.98h-2.98M18 16.52v2.99"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeMiterlimit="10"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      // </svg>
    )
  }),
  userEdit: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  userRemove: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM19.03 16.94l-2.11 2.11M16.94 16.96l2.12 2.11"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  userSearch: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  userVerified: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 22 18Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m16.44 18 .99.99 2.13-1.97"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  userSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  cloud: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M7.27 13.01a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  folder: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        ></path>
      </svg>
    )
  }),
  edit: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  editLine: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  editSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
      >
        <path
          d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }),
  arrangeHorizontal: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.28 10.45L21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
        ></path>
      </svg>
    )
  }),
  pdf: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M7 18V15.5M7 15.5V14C7 13.5286 7 13.2929 7.15377 13.1464C7.30754 13 7.55503 13 8.05 13H8.75C9.47487 13 10.0625 13.5596 10.0625 14.25C10.0625 14.9404 9.47487 15.5 8.75 15.5H7ZM21 13H19.6875C18.8625 13 18.4501 13 18.1938 13.2441C17.9375 13.4882 17.9375 13.881 17.9375 14.6667V15.5M17.9375 18V15.5M17.9375 15.5H20.125M15.75 15.5C15.75 16.8807 14.5747 18 13.125 18C12.7979 18 12.6343 18 12.5125 17.933C12.2208 17.7726 12.25 17.448 12.25 17.1667V13.8333C12.25 13.552 12.2208 13.2274 12.5125 13.067C12.6343 13 12.7979 13 13.125 13C14.5747 13 15.75 14.1193 15.75 15.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  briefcase: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  briefcaseTimer: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.65 11a16.335 16.335 0 0 1-5.64 2.64M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  building: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12.5 22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22ZM21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19ZM5.5 9h3.47M5.5 13h3.47"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01ZM21.96 14.87A2.249 2.249 0 0 1 19.72 17c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  calendar: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  calendarNum: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M18 2V4M6 2V4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 8H18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  calendarAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M18 2V4M6 2V4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.05 22C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4765 5.68186 21.4996 7.80438 21.5 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 8H21"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 18H21M17 14L17 22"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   width={props.size || 16}
      //   height={props.size || 16}
      //   viewBox="0 0 24 24"
      //    fill={props.fill || 'none'}
      //   {...props}
      // >
      //   <path
      //     d="M8 2v3M16 2v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19.49 19.05h-2.98M18 17.59v2.99"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeMiterlimit="10"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      //   <path
      //     d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="1.5"
      //     strokeMiterlimit="10"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      //   <path
      //     d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
      //     stroke={props.color || 'currentColor'}
      //     strokeWidth="2"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   ></path>
      // </svg>
    )
  }),
  medal: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m7.52 13.52-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  map: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.73 6.27 6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 0 1-2.48 0c-.95-.9-2.04-2.36-1.64-4.08Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        ></path>
        <path
          d="M9.095 8.7h.009"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  global: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8 3h1a28.424 28.424 0 0 0 0 18H8M15 3a28.424 28.424 0 0 1 0 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9a28.424 28.424 0 0 1 18 0"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  moneyReceive: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12 7.5v9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17 3v4h4M22 2l-5 5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  save: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12.89 5.88H5.11A3.12 3.12 0 0 0 2 8.99v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.27.71 2.31.09 2.31-1.36V8.99a3.105 3.105 0 0 0-3.1-3.11Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  searchNormal: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  unlock: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5ZM6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  category: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  chartBars: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path d="M7 17L7 13" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 17L12 7" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 17L17 11" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  chartWaterfall: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 17L20 14"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 14L16 8"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14L12 11"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11L8 5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  hierarchy: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  hierarchySquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.88 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  sun: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }),
  moon: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    )
  }),
  theme: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }),
  device: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
        <rect width="6" height="10" x="16" y="12" rx="2" />
      </svg>
    )
  }),
  notification: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  notificationBell: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  direct: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M10.34 7h3.33M9.5 10h5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  directNormal: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  directInbox: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 2v7l2-2M12 9l-2-2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  directNotif: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M1.98 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  directSend: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 9V2l-2 2M12 2l2 2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 5.13c-3.54.52-5 2.6-5 6.87v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  wallet: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  walletAdd: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M2.00195 11C2.00195 7.22876 2.00195 5.34315 3.17353 4.17157C4.3451 3 6.23072 3 10.002 3H14.002C14.9319 3 15.3969 3 15.7784 3.10222C16.8137 3.37962 17.6223 4.18827 17.8997 5.22354C18.002 5.60504 18.002 6.07003 18.002 7M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H12.5005"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 17H6M6 17H2M6 17V21M6 17L6 13"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }),
  walletRemove: styled((props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M10 15L3 22M10 22L3 15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H13.501M18.002 7C18.002 6.07003 18.002 5.60504 17.8997 5.22354C17.6223 4.18827 16.8137 3.37962 15.7784 3.10222C15.3969 3 14.9319 3 14.002 3H10.002C6.23072 3 4.3451 3 3.17353 4.17157C2.00195 5.34315 2.00195 7.22876 2.00195 11V12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }),
  trash: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  i3dcube: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m12.92 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51c.58-.31 1.26-.31 1.84 0ZM3.61 10.13l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.238 2.238 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99ZM20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  paintBucket: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.77 15.56l3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66L15 4.33c-2.59-2.59-3.72-1.94-5.66 0L3.77 9.9c-2.39 2.4-2.59 3.07 0 5.66zM19.2 16.79l-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0z"
        ></path>
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 12.24a33.319 33.319 0 0117-.13l.5.13"
        ></path>
      </svg>
    )
  }),
  logout: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"
        ></path>
      </svg>
    )
  }),
  copy: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
        ></path>
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
        ></path>
      </svg>
    )
  }),
  file: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 7H15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11H11"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  fileAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11 6L3 6M7 2V10" stroke={props.color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }),
  fileImport: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M20 15.0057V10.6606C20 9.84276 20 9.43383 19.8478 9.06613C19.6955 8.69843 19.4065 8.40927 18.8284 7.83096L14.0919 3.09236C13.593 2.59325 13.3436 2.3437 13.0345 2.19583C12.9702 2.16508 12.9044 2.13778 12.8372 2.11406C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88646C5.26731 3.06554 5.06508 3.26787 4.88607 3.48998C4 4.58943 4 6.21265 4 9.45908V14.0052C4 17.7781 4 19.6645 5.17157 20.8366C6.11466 21.7801 7.52043 21.9641 10 22M13 2.50022V3.00043C13 5.83009 13 7.24492 13.8787 8.12398C14.7574 9.00304 16.1716 9.00304 19 9.00304H19.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22C14.3932 21.4102 12 19.8403 12 19C12 18.1597 14.3932 16.5898 15 16M13 19H20"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  folderAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M18 13.5V21.5M22 17.5L14 17.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9587 8.52819 21.9963 9.68416 21.9994 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }),
  profile: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  profiles: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  profileAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M18.5 19.5h-4M16.5 21.5v-4M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.428 4.428 0 0 1 11.99 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43ZM11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  profileTick: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m14.44 19.05 1.52 1.52L19 17.53M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.428 4.428 0 0 1 11.99 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43ZM11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  profileDelete: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m18.41 18.09-2.82 2.82M18.41 20.91l-2.82-2.82M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM12 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  timerPause: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 2h6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19 17v4M16 17v4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  timerPlay: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 8v5M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 2h6M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3V18.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  tag: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
    )
  }),
  caretDown: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        ></path>
      </svg>
    )
  }),
  caretRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
        ></path>
      </svg>
    )
  }),
  caretUp: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
        ></path>
      </svg>
    )
  }),
  caretLeft: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        ></path>
      </svg>
    )
  }),
  rows: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
    )
  }),
  attachSqaure: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m12.2 11.8-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  sort: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 7h18M6 12h12M10 17h4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
    )
  }),
  document: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  firstLine: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M14 4.5h7M14 9.5h7M3 14.5h18M3 19.5h18M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  minus: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M6 12h12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  exportSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
        ></path>
      </svg>
    )
  }),
  exportCurve: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          stroke={props.color || 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 15V3.62M15.35 5.85L12 2.5 8.65 5.85"
        ></path>
      </svg>
    )
  }),
  check: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }),
  checkCheck: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 6 7 17l-5-5" />
        <path d="m22 10-7.5 7.5L13 16" />
      </svg>
    )
  }),
  slidersHorizontal: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="21" x2="14" y1="4" y2="4" />
        <line x1="10" x2="3" y1="4" y2="4" />
        <line x1="21" x2="12" y1="12" y2="12" />
        <line x1="8" x2="3" y1="12" y2="12" />
        <line x1="21" x2="16" y1="20" y2="20" />
        <line x1="12" x2="3" y1="20" y2="20" />
        <line x1="14" x2="14" y1="2" y2="6" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="16" x2="16" y1="18" y2="22" />
      </svg>
    )
  }),
  slidersVertical: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="4" x2="4" y1="21" y2="14" />
        <line x1="4" x2="4" y1="10" y2="3" />
        <line x1="12" x2="12" y1="21" y2="12" />
        <line x1="12" x2="12" y1="8" y2="3" />
        <line x1="20" x2="20" y1="21" y2="16" />
        <line x1="20" x2="20" y1="12" y2="3" />
        <line x1="2" x2="6" y1="14" y2="14" />
        <line x1="10" x2="14" y1="8" y2="8" />
        <line x1="18" x2="22" y1="16" y2="16" />
      </svg>
    )
  }),
  smiley: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    )
  }),
  ellipsis: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    )
  }),
  ellipsisVertical: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    )
  }),
  setting: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  grid: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M4 5L16 5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12L20 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19L12 19"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  gripVertical: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="5" r="1" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="15" cy="5" r="1" />
        <circle cx="15" cy="19" r="1" />
      </svg>
    )
  }),
  tech: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  phone: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }),
  linkedin: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
      >
        <path
          d="M7 10V17"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.00801 7L6.99902 7"
          stroke={props.color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  refresh: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color="#currentColor"
         fill={props.fill || 'none'}
      >
        <path
          d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  meta: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }),
  x: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }),
  textAa: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M14 19L11.1069 10.7479C9.76348 6.91597 9.09177 5 8 5C6.90823 5 6.23652 6.91597 4.89309 10.7479L2 19M4.5 12H11.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.9692 13.9392V18.4392M21.9692 13.9392C22.0164 13.1161 22.0182 12.4891 21.9194 11.9773C21.6864 10.7709 20.4258 10.0439 19.206 9.89599C18.0385 9.75447 17.1015 10.055 16.1535 11.4363M21.9692 13.9392L19.1256 13.9392C18.6887 13.9392 18.2481 13.9603 17.8272 14.0773C15.2545 14.7925 15.4431 18.4003 18.0233 18.845C18.3099 18.8944 18.6025 18.9156 18.8927 18.9026C19.5703 18.8724 20.1955 18.545 20.7321 18.1301C21.3605 17.644 21.9692 16.9655 21.9692 15.9392V13.9392Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  at: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  }),
  drive: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M6 6.25v2M10 6.25v2M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM6 16v2M10 16v2M14 7.25h4M14 17h4M2 12h20"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  option: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 8V12M12 12H9C7.11438 12 6.17157 12 5.58579 12.5858C5 13.1716 5 14.1144 5 16M12 12H15C16.8856 12 17.8284 12 18.4142 12.5858C19 13.1716 19 14.1144 19 16"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M10.2857 2H13.7143C15.7888 2 16 3.10993 16 5C16 6.89007 15.7888 8 13.7143 8H10.2857C8.2112 8 8 6.89007 8 5C8 3.10993 8.2112 2 10.2857 2Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
      </svg>
    )
  }),
  help: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M17 18.43h-4l-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66M11.995 13.75h.01"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  sparkle: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    )
  }),
  infoCircle: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.995 16h.009"
          stroke={props.color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  infoSquare: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.992 8H12.001"
          stroke={props.color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  descending: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <path d="M20 8h-5" />
        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
        <path d="M15 14h5l-5 6h5" />
      </svg>
    )
  }),
  ascending: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
        <path d="M20 8h-5" />
        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
        <path d="M15 14h5l-5 6h5" />
      </svg>
    )
  }),
  close: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }),
  cornerUpLeft: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M20 21V18.9231C20 16.9221 20 15.9217 19.8547 15.0846C19.0547 10.4765 15.0934 6.86243 10.0426 6.13259C9.12509 6 7.19318 6 5 6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 3C6.39316 3.58984 4 5.15973 4 6C4 6.84027 6.39316 8.41016 7 9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  cornerUpRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  cornerDownLeft: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M20 3V5.07692C20 7.07786 20 8.07833 19.8547 8.91545C19.0547 13.5235 15.0934 17.1376 10.0426 17.8674C9.12509 18 7.19318 18 5 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 21C6.39316 20.4102 4 18.8403 4 18C4 17.1597 6.39316 15.5898 7 15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  cornerDownRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M4 3V5.07692C4 7.07786 4 8.07833 4.14533 8.91545C4.94529 13.5235 8.90656 17.1376 13.9574 17.8674C14.8749 18 16.8068 18 19 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21C17.6068 20.4102 20 18.8403 20 18C20 17.1597 17.6068 15.5898 17 15"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  indent: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polyline points="3 8 7 12 3 16" />
        <line x1="21" x2="11" y1="12" y2="12" />
        <line x1="21" x2="11" y1="6" y2="6" />
        <line x1="21" x2="11" y1="18" y2="18" />
      </svg>
    )
  }),
  outdent: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polyline points="7 8 3 12 7 16" />
        <line x1="21" x2="11" y1="12" y2="12" />
        <line x1="21" x2="11" y1="6" y2="6" />
        <line x1="21" x2="11" y1="18" y2="18" />
      </svg>
    )
  }),
  paragraph: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M13 4v16" />
        <path d="M17 4v16" />
        <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
      </svg>
    )
  }),
  h1: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M4 12h8" />
        <path d="M4 18V6" />
        <path d="M12 18V6" />
        <path d="m17 12 3-2v8" />
      </svg>
    )
  }),
  h2: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M4 12h8" />
        <path d="M4 18V6" />
        <path d="M12 18V6" />
        <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
      </svg>
    )
  }),
  h3: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M4 12h8" />
        <path d="M4 18V6" />
        <path d="M12 18V6" />
        <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
        <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
      </svg>
    )
  }),
  alignLeft: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 4.5h18M3 9.5h9.47M3 14.5h18M3 19.5h9.47"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  alignCenter: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 4.5h18M7.26 9.5h9.48M3 14.5h18M7.26 19.5h9.48"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  alignJustify: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 4.5h18M3 9.5h18M3 14.5h18M3 19.5h18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  alignRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 4.5h18M11.53 9.5H21M3 14.5h18M11.53 19.5H21"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  blockquote: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  bold: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5ZM4.88 12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2V12v0Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  underline: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M5 21h14M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  italic: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M9.62 3h9.25M5.12 21h9.25M14.25 3l-4.5 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  download: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M3 14L3.23384 14.6626C4.144 17.2413 4.59908 18.5307 5.63742 19.2654C6.67576 20 8.0431 20 10.7778 20H13.2222C15.9569 20 17.3242 20 18.3626 19.2654C19.4009 18.5307 19.856 17.2413 20.7662 14.6626L21 14"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 14V4M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  strikethrough: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 4H9a3 3 0 0 0-2.83 4" />
        <path d="M14 12a4 4 0 0 1 0 8H6" />
        <line x1="4" x2="20" y1="12" y2="12" />
      </svg>
    )
  }),
  code: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }),
  hash: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M10 3 8 21M16 3l-2 18M3.5 9h18M2.5 15h18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  instagram: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }),
  boolean: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 2v10" />
        <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
      </svg>
    )
  }),
  rotateCw: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
      </svg>
    )
  }),
  entityList: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
      >
        <path
          d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  listBullet: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="8" x2="21" y1="6" y2="6" />
        <line x1="8" x2="21" y1="12" y2="12" />
        <line x1="8" x2="21" y1="18" y2="18" />
        <line x1="3" x2="3.01" y1="6" y2="6" />
        <line x1="3" x2="3.01" y1="12" y2="12" />
        <line x1="3" x2="3.01" y1="18" y2="18" />
      </svg>
    )
  }),
  listOrdered: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="10" x2="21" y1="6" y2="6" />
        <line x1="10" x2="21" y1="12" y2="12" />
        <line x1="10" x2="21" y1="18" y2="18" />
        <path d="M4 6h1v4" />
        <path d="M4 10h2" />
        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
      </svg>
    )
  }),
  listTodo: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="3" y="5" width="6" height="6" rx="1" />
        <path d="m3 17 2 2 4-4" />
        <path d="M13 6h8" />
        <path d="M13 12h8" />
        <path d="M13 18h8" />
      </svg>
    )
  }),
  listAdd: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M11 12H3" />
        <path d="M16 6H3" />
        <path d="M16 18H3" />
        <path d="M18 9v6" />
        <path d="M21 12h-6" />
      </svg>
    )
  }),
  send: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 24 24"
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23ZM5.44 12h5.4"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }),
  bank: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M11.9959 7H12.0049"
          stroke={props.color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 10V18.5M8 10V18.5" stroke={props.color || 'currentColor'} strokeWidth="1.5" />
        <path d="M16 10V18.5M20 10V18.5" stroke={props.color || 'currentColor'} strokeWidth="1.5" />
        <path
          d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
      </svg>
    )
  }),
  arrowUpRight: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M6.99994 7L17.9999 18"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.9999 6.13151C12.9999 6.13151 7.36639 5.65662 6.51147 6.51153C5.65655 7.36645 6.13151 13 6.13151 13"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  warn: styled((props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size || 16}
        height={props.size || 16}
        color={props.color || 'currentColor'}
         fill={props.fill || 'none'}
        {...props}
      >
        <path
          d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
        />
        <path
          d="M12.2422 17V13C12.2422 12.5286 12.2422 12.2929 12.0957 12.1464C11.9493 12 11.7136 12 11.2422 12"
          stroke={props.color || 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.992 8.99997H12.001"
          stroke={props.color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }),
  escape: styled(({ size }: IconProps) => {
    return (
      <kbd
        className={css({
          fontSize: '1rem',
          lineHeight: '1.4rem',
          height: size,
          letterSpacing: '0.02em',
          color: 'sAppMutedText'
        })}
      >
        ESC
      </kbd>
    )
  })
}
