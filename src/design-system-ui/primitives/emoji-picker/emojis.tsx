'use client'

import { EmojiClickData } from 'emoji-picker-react'
import dynamic from 'next/dynamic'
import React from 'react'

import { Box } from '../layout'

const EmojiPickerReact = dynamic(
  () => {
    return import('emoji-picker-react')
  },
  { ssr: false }
)

type Props = {
  onEmojiClick: (emoji: EmojiClickData) => void
}

export const Emojis = ({ onEmojiClick }: Props) => {
  return (
    <Box
      css={{
        '& .EmojiPickerReact': {
          '--epr-highlight-color': '#733dff !important',
          // '--epr-hover-bg-color': 'transparent !important',
          // '--epr-focus-bg-color': 'transparent !important',
          '--epr-hover-bg-color': 'rgba(255, 255, 255, 0.1) !important',
          '--epr-focus-bg-color': 'rgba(255, 255, 255, 0.1) !important',
          '--epr-text-color': 'sAppPrimaryText !important',
          '--epr-search-input-bg-color': 'transparent !important',
          '--epr-picker-border-color': 'transparent !important',
          '--epr-bg-color': 'transparent !important',
          '--epr-category-icon-active-color': '#733dff !important',
          '--epr-skin-tone-picker-menu-color': 'rgba(255, 255, 255, 0.1) !important',
          '--epr-horizontal-padding': '0 !important',
          '--epr-picker-border-radius': '1.2rem !important',
          '--epr-search-border-color': 'var(--epr-highlight-color)',
          '--epr-header-padding': '15px var(--epr-horizontal-padding)',
          '--epr-active-skin-tone-indicator-border-color': 'var(--epr-highlight-color)',
          '--epr-active-skin-hover-color': 'var(--epr-hover-bg-color)',
          '--epr-search-input-bg-color-active': 'var(--epr-search-input-bg-color)',
          '--epr-search-input-padding': '0 30px',
          '--epr-search-input-border-radius': '8px',
          '--epr-search-input-height': '40px',
          '--epr-search-input-text-color': 'var(--epr-text-color)',
          '--epr-search-input-placeholder-color': '#9BA3AF !important',
          '--epr-search-bar-inner-padding': '1rem !important',
          '--epr-category-navigation-button-size': '30px',
          '--epr-emoji-variation-picker-height': '45px',
          '--epr-emoji-variation-picker-bg-color': 'var(--epr-bg-color)',
          '--epr-preview-height': '70px',
          '--epr-preview-text-size': '14px',
          '--epr-preview-text-padding': '0 var(--epr-horizontal-padding)',
          '--epr-preview-border-color': 'var(--epr-picker-border-color)',
          '--epr-preview-text-color': 'var(--epr-text-color)',
          '--epr-category-padding': '0 var(--epr-horizontal-padding)',
          '--epr-category-label-bg-color': 'transparent !important',
          '--epr-category-label-text-color': 'var(--epr-text-color)',
          '--epr-category-label-padding': '0 var(--epr-horizontal-padding)',
          '--epr-category-label-height': '40px',
          '--epr-emoji-size': '22px !important',
          '--epr-emoji-padding': '4px',
          '--epr-emoji-fullsize': 'calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)',
          '--epr-emoji-hover-color': 'rgba(255, 255, 255, 0.1) !important',
          '--epr-emoji-variation-indicator-color': 'var(--epr-picker-border-color)',
          '--epr-emoji-variation-indicator-color-hover': 'var(--epr-text-color)',
          '--epr-header-overlay-z-index': '3',
          '--epr-emoji-variations-indictator-z-index': '1',
          '--epr-category-label-z-index': '2',
          '--epr-skin-variation-picker-z-index': '5',
          '--epr-preview-z-index': '6',

          '& li.epr-emoji-category>.epr-emoji-category-label': {
            fontSize: '1.2rem !important',
            fontWeight: '600 !important',
            bgColor: 'none !important',
            pos: 'relative',
            zIndex: '10',
            backdropFilter: 'none !important'
          },

          '& .epr-category-nav': {
            display: 'none !important'
          },

          '& .epr-search-container input.epr-search': {
            border: 'subtle !important',
            // px: '1rem !important',

            _focus: {
              border: 'focused !important'
            }
          }
        },
        '& aside.EmojiPickerReact.epr-main:has(input:placeholder-shown) .epr-category-nav': {
          display: 'none !important'
        }
      }}
    >
      <EmojiPickerReact searchPlaceHolder="Search Emoji" width="full" onEmojiClick={onEmojiClick} />
    </Box>
  )
}
