import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
      ,
    </>
  )
}

export default MyApp
