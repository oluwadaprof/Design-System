export const removeFalsyValues = (obj: Record<string, unknown>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value))
}
