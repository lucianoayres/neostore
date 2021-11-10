import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { helperNumberFormat } from '../helpers/helperNumberFormat'

interface FooterProps {
  itemsInCart: number
  subTotal: number
}

export function Footer({
  itemsInCart: cartItemsLength = 0,
  subTotal = 0
}: FooterProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Divider />

      {!isWideVersion && (
        <Flex m="4">
          <Button
            w="96vw"
            color="light.title"
            bgColor="light.button"
            size="lg"
            h="3.4rem"
            as="div"
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              bgColor: 'light.button'
            }}
          >
            <Flex justify="space-between" align="center" flex="1">
              <Flex>
                <Box>
                  <Icon as={RiShoppingCart2Line} w="26px" h="26px" />
                </Box>

                <Box>
                  <Circle
                    bg="light.badge"
                    size="26px"
                    mt={-2}
                    fontSize="0.8rem"
                    fontWeight="bold"
                  >
                    {cartItemsLength}
                  </Circle>
                </Box>
              </Flex>

              <Box mr="2.8em" fontSize="md">
                Sub total: {helperNumberFormat(subTotal)}
              </Box>
              <Box>&nbsp;</Box>
            </Flex>
          </Button>
        </Flex>
      )}
    </>
  )
}
