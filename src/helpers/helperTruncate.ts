export function helperTruncate(text: string, charCount: number) {
  const truncatedText = text.substring(0, charCount).trim()

  if (text.length <= charCount) {
    return truncatedText
  } else {
    return `${truncatedText}...`
  }
}
