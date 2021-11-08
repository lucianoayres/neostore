import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    light: {
      button: '#2264D1',
      border: '#7fa7e9',
      buttonDisabled: '#000000',
      star: '#FB8200',
      title: '#FFFFFF',
      bg: '#FFFFFF',
      badge: 'red'
    },
    gray: {
      bg: '#EDEDF0',
      bgfilter: '#F9F9F9',
      darker: '#5A5B6A'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800'
      }
    }
  }
})
