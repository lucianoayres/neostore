import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight">
      neo
      <Text as="span" color="blue.400">
        .
      </Text>
      store
    </Text>
  )
}
