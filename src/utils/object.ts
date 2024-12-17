import { getProperty } from 'dot-prop'

export const getProp = (obj: Record<string, unknown>, key: string) => {
  return getProperty(obj, key)
}
