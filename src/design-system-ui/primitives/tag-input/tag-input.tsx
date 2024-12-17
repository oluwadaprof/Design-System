import React from 'react'
import { WithContext as ReactTags, Tag } from 'react-tag-input'



import { inputStyles } from '../input'
import { Box } from '@design-system-ui/styled-system/jsx'
import { css, cx } from '@design-system-ui/styled-system/css'

type Props = {
  value: string[]
  setValue: (val: string[]) => void
  suggestions?: Tag[]
  placeholder?: string
  labelField?: string
  autofocus?: boolean
  allowDeleteFromEmptyInput?: boolean
  autocomplete?: boolean
  allowDragDrop?: boolean
  allowUnique?: boolean
  minQueryLength?: number
  readOnly?: boolean
  inline?: boolean
  name?: string
  id?: string
  handleTagClick?: (index: number) => void
  handleInputChange?: (val: string) => void
  handleInputFocus?: (val: string) => void
  handleInputBlur?: (val: string) => void
  classNames?: {
    tags?: string
    tagInput?: string
    tagInputField?: string
    selected?: string
    tag?: string
    remove?: string
    suggestions?: string
    activeSuggestion?: string
    editTagInput?: string
    editTagInputField?: string
    clearAll?: string
  }
}

const KeyCodes = {
  comma: 188,
  enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export const TagInput = ({ classNames, value = [], setValue, ...props }: Props) => {
  const [tags, setTags] = React.useState<Tag[]>(value.map((val) => ({ id: val, text: val })))

  const handleDelete = (i: number) => {
    const updatedTags = tags.filter((tag, index) => index !== i)
    setTags(updatedTags)
    setValue(updatedTags.map((tag) => tag.id))
  }

  const handleAddition = (tag: Tag) => {
    const newVal = [...tags, tag]
    setTags(newVal)
    setValue(newVal.map((val) => val.id))
  }

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    // re-render
    setTags(newTags)
  }

  const handleTagClick = (/* index: number */) => {
    //
  }

  const handleInputBlur = (textInputValue: string) => {
    // Add the current text input value to the tags
    if (textInputValue.trim() !== '') {
      const newTag = { id: textInputValue, text: textInputValue }
      handleAddition(newTag)
    }
  }

  return (
    <Box>
      <ReactTags
        tags={tags}
        suggestions={[]}
        delimiters={delimiters}
        handleInputBlur={handleInputBlur}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="inline"
        autocomplete
        classNames={{
          tags: cx(classNames?.tags),
          tagInput: cx(classNames?.tagInput),
          selected: cx(classNames?.selected),
          tag: cx(
            css({
              display: 'inline-flex',
              alignItems: 'center',
              justifyItems: 'center',
              mb: '0.4rem',
              mr: '0.4rem',
              bg: 'sMutedBackground',
              rounded: '0.4rem',
              px: '0.2rem'
            }),
            classNames?.tag
          ),
          remove: cx(css({ ml: '0.2rem', fontSize: '1', cursor: 'pointer' }), classNames?.remove),
          suggestions: cx(classNames?.suggestions),
          activeSuggestion: cx(classNames?.activeSuggestion),
          tagInputField: cx(
            inputStyles({ look: 'form', use: 'sm' }),
            css({
              '&::placeholder': {
                color: 'sFormPlaceholder'
              }
            }),
            classNames?.tagInputField
          )
          // editTagInput: 'editTagInputClass',
          // editTagInputField: 'editTagInputField',
          // clearAll: 'clearAllClass',
        }}
        {...props}
      />
    </Box>
  )
}
