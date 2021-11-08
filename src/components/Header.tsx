import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Circle,
  Flex,
  Icon,
  IconButton,
  Input,
  Select,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownFill, RiShoppingCart2Line } from 'react-icons/ri'
import { Logo } from '../components/Logo'
import { SearchBoxCloseButton } from '../components/SearchBox/SearchBoxCloseButton'
import { helperNumberFormat } from '../helpers/helperNumberFormat'

import { Product } from '../types'
interface HeaderProps {
  search: string
  cartItems: Product[]
  subTotal: number
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
}

export function Header({
  search = '',
  cartItems = [],
  subTotal = 0,
  handleSearchChange,
  clearSearch
}: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Flex
        as="header"
        h="20"
        align="center"
        justify="space-between"
        mx={['4', '20']}
      >
        {isWideVersion && (
          <Box mt={-3}>
            <Logo />
          </Box>
        )}
        {isWideVersion && <Box>&nbsp;</Box>}

        <Flex
          as="label"
          flex="1"
          py={['3', '2']}
          px="4"
          ml={['0', '24']}
          maxWidth={[280, 380]}
          bg="gray.bg"
          borderRadius="4"
        >
          <Input
            color="gray.500"
            variant="unstyled"
            placeholder="Search product..."
            _placeholder={{ color: 'gray.600' }}
            value={search}
            onChange={handleSearchChange}
          />
          <SearchBoxCloseButton onClose={clearSearch} isSearching={!!search} />
        </Flex>
        <Box>
          {!isWideVersion && (
            <IconButton
              aria-label="Open navigation"
              icon={<HamburgerIcon />}
              fontSize="24"
              variant="unstyled"
            />
          )}

          {isWideVersion && (
            <>
              <Flex>
                <Flex mr="4">
                  <Select
                    w={32}
                    border="none"
                    icon={<RiArrowDropDownFill />}
                    fontSize="sm"
                    textAlign="center"
                    lineHeight="24px"
                  >
                    <option value="en-US">English</option>
                    <option value="dt-DE">Deutsch</option>
                  </Select>
                </Flex>
                <Flex>
                  <Button
                    w={220}
                    color="light.title"
                    bgColor="light.button"
                    size="md"
                    h="2.6rem"
                    as="div"
                    _hover={{
                      bgColor: 'light.button'
                    }}
                  >
                    <Flex align="center">
                      <Box>
                        <Flex mr="2">
                          <Box>
                            <Icon
                              as={RiShoppingCart2Line}
                              w={'20px'}
                              h={'20px'}
                            />
                          </Box>

                          <Box>
                            <Circle
                              bg="light.badge"
                              size={'18px'}
                              mt={-1}
                              fontSize="0.7rem"
                              fontWeight="bold"
                            >
                              {cartItems.length}
                            </Circle>
                          </Box>
                        </Flex>
                      </Box>

                      <Box fontSize={'sm'} flex="1">
                        Sub total: {helperNumberFormat(subTotal)}
                      </Box>
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </>
  )
}
