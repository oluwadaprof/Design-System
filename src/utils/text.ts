import { nanoid } from 'nanoid'

export const camelCaseToTitleCase = (str = '') => {
  const result = str.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}

export const camelize = (str = '') => {
  return str
    .replace(/_/g, ' ') //This should handle the case of underscore and replace with space.
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export const formartFileSize = (bytes = 0, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const formatNumber = (number: number): string => {
  if (number < 1000) {
    return number.toString()
  } else if (number >= 1000 && number < 1000000) {
    return `${(number / 1000).toFixed(2).replace(/\.?0+$/, '')}k`
  } else if (number >= 1000000 && number < 1000000000) {
    return `${(number / 1000000).toFixed(2).replace(/\.?0+$/, '')}m`
  } else {
    return `${(number / 1000000000).toFixed(2).replace(/\.?0+$/, '')}b`
  }
}

export const formatParagraph = (inputString = '') => {
  if (!inputString) return ''

  return inputString.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (i) => i.toUpperCase())
}

export const capitalize = (str = '') => {
  if (!str) return ''

  return str.trim().charAt(0).toUpperCase() + str.slice(1)
}

export const truncateString = (str = '', num = 100) => {
  const trncatedString = str.length > num ? str.slice(0, num) + '...' : str
  return trncatedString
}

export const removeNonAlphaNumericChars = (str = '') => {
  return str.replace(/[^A-Za-z0-9]/g, '')
}

export const getNameInitials = (name = '', single = true) => {
  if (!name) return ''

  if (single) return name.charAt(0).toLocaleUpperCase()

  const names = name.split(' ')
  const firstName = names[0] ?? ''
  const lastName = names.length > 1 ? names[names.length - 1] : ''
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`.toLocaleUpperCase()
    : firstName.charAt(0).toLocaleUpperCase()
}

export const getTextWidth = (text: string, font?: string) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  context.font = font || getComputedStyle(document.body).font

  return context.measureText(text).width
}

export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // This will remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, '-') // This will replace spaces with hyphens
}

export const ordinal = (number: number): string => {
  if (10 <= number % 100 && number % 100 <= 20) {
    return number + 'th'
  } else {
    const suffixes: { [key: number]: string } = { 1: 'st', 2: 'nd', 3: 'rd' }
    const suffix = suffixes[number % 10] || 'th'
    return number + suffix
  }
}

export const formatAmount = (amount = 0) =>
  `$${(amount / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}`

export const getAmountPerMonth = (amount = 0, billingPeriod = 'month') => {
  if (billingPeriod === 'year') {
    return Math.ceil(amount / 12)
  }

  return amount
}

export const genNanoId = () => {
  return nanoid()
}

export const cleanupParagraph = (text: string | undefined) => {
  if (!text) {
    return ''
  }

  // Replace escape sequences with actual characters
  let cleanedText = text
    .replace(/\\n/g, '\n') // Convert \n to newlines
    .replace(/\\“/g, '“') // Convert \“ to proper quotes
    .replace(/\\”/g, '”') // Convert \” to proper quotes
    .replace(/\\\//g, '/') // Convert \\/ to /
    .replace(/\\/g, '') // Remove any remaining backslashes

  // Remove numbering
  cleanedText = cleanedText.replace(/^\d+\.\s+/gm, '') // Remove numbers followed by a period and space at the start of lines

  // Normalize spaces and punctuation
  cleanedText = cleanedText
    .replace(/([,.!?])\s*(\n?)/g, '$1 ') // Ensure proper space after punctuation
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .replace(/\s*(\n)\s*/g, '\n') // Trim spaces around newlines
    .trim() // Remove leading/trailing spaces

  // Capitalize the first letter of each sentence
  cleanedText = cleanedText.replace(/(^\s*[a-z])|([.?!]\s+[a-z])/g, (match) => match.toUpperCase())

  return cleanedText
}
