export const nextString = (input: string, validCharacters: string) => {
  const chars = input.split('')
  for (let i = chars.length - 1; i >= 0; i--) {
    const index = validCharacters.indexOf(chars[i])
    if (index < validCharacters.length - 1) {
      chars[i] = validCharacters[index + 1]
      return chars.join('')
    } else {
      chars[i] = validCharacters[0]
    }
  }
  return '' // If we reach here, then we're at the end of possible strings
}

export const generateBetweenShortestPath = (
  strg1: string,
  strg2: string,
  validCharacters: string
) => {
  // const start = Date.now();
  let result = strg1
  let maxTries = 10000
  while (result <= strg1 || result >= strg2) {
    // const time = Date.now();
    // console.log((time - start) / 1000, 'seconds');
    if (maxTries-- === 0) throw new Error('Failed to find string between inputs in reasonable time')
    result = nextString(result, validCharacters)
  }

  return result
}

export const generateStringLessThan = (
  str: string,
  minLength: number,
  maxLength: number,
  chars: string
): string => {
  let result = str.slice(0, -1)
  while (result.length < minLength) {
    result += chars[0]
  }
  return result
}

export const generateRandomStringGreaterThan = (str: string): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = 10
  let randomString = ''

  // Generate a random string with the same length as the given string
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  // Check if the generated string is greater than the given string
  while (randomString <= str) {
    randomString = ''
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  }

  return randomString
}

export const generateRandomStringBetween = (str1: string, str2: string) => {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const start = Date.now()
  const minLength = 10
  const maxLength = 10

  if (str1 === str2) {
    return str1
  }

  if (!str1) return generateStringLessThan(str2, minLength, maxLength, validCharacters)
  if (!str2) return generateRandomStringGreaterThan(str1)

  if (str1 > str2) {
    throw new Error('String 1 cannot be greater than 2')
  }

  const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
  let randomString = ''
  /***
   * we try to generate a random string between str1 and str2 using a random generator.
   * This helps make sure the string is as random as possible.
   * This approach has caveats because if the strings are too similar we get a O(n^2) complexity
   * and the function will take too long to execute.
   * To avoid this we set a time limit of 0.5 seconds.
   * If the function takes longer than that we generate a random string between str1 and str2
   * we use the generateBetweenShortestPath function to do this.
   * This script starts at the end of the string and increments the character by one (according to the ordering of validCharacters)
   * until it finds a character that is not at the end of validCharacters. If it reaches the end of validCharacters,
   * it resets that character to the first character in validCharacters and moves to the next character.
   * Note that the maxTries variable is used to prevent an infinite loop in case no valid string can be found between the two input strings.
   * Please be aware that the randomness of the resulting string is very limited due to the nature of the comparison,
   * this will not truly generate a random string between two given strings but a predictable one
   */
  try {
    while (randomString <= str1 || randomString >= str2) {
      const time = Date.now()
      // console.log((time - start) / 1000, 'seconds');
      const elapsed = (time - start) / 1000
      if (elapsed >= 0.5) {
        randomString = generateBetweenShortestPath(str1, str2, validCharacters)
        return randomString
      }
      randomString = ''
      for (let i = 0; i < randomLength; i++) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length)
        randomString += validCharacters[randomIndex]
      }
    }
  } catch (e) {
    //
  }

  return randomString
}
