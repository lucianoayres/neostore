import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { useRef, useState } from 'react'

export function SearchBox() {
  const [search, setSearch] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.100"
      borderRadius="4"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search product..."
        _placeholder={{ color: 'gray.600' }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
